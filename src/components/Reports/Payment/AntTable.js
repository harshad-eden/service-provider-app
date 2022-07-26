import { Table } from 'antd';
import styles from './index.module.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../Common/StatusDropDown';
import { getPaymentsWithFilter } from '../../../store/paymentSlice';

import ViewDocsModal from '../../DocView/ViewDocs';
import { useEffect, useState } from 'react';

import DocView from '../../DocView/DocView';
import { useDispatch, useSelector } from 'react-redux';

const AntTable = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doocs, setDoocs] = useState([]);
  const [isDocVisible, setIsDocVisible] = useState(false);
  const [hideDropDown, setHideDropDown] = useState();
  const [filterState, setFilter] = useState('');

  const state = useSelector((state) => state.payment);

  console.log(state);

  let statusArr = [
    { color: '#2da028', text: 'Initiated' },
    { color: '#9f3ade', text: 'Processed' },
    { color: '#e00f65', text: 'Declined' },
    { color: 'blue', text: 'Transferred' },
  ];

  useEffect(() => {
    if (filterState !== '') {
      dispatch(getPaymentsWithFilter(filterState));
      setFilter('');
    }
  }, [filterState]);

  const columns = [
    {
      title: 'Payment ID',
      dataIndex: 'payment_id',
      width: 105,
    },
    {
      title: 'Payment invoice',
      dataIndex: 'payment_invoice',
      render: (item) => <div>{`${item.amount}, ${item.currency}`}</div>,
      width: 140,
    },
    {
      title: 'Claim Number',
      dataIndex: 'claim_number',
      width: 100,
    },
    {
      title: 'Payment invoice',
      dataIndex: 'payment_invoice',
      render: (item) => <div>{`${item.amount}, ${item.currency}`}</div>,
      width: 120,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      // filterDropdown: (props) => (
      //   <Dropdown
      //     statusArr={statusArr}
      //     hideDropDown={hideDropDown}
      //     setFilter={setFilter}
      //     setHideDropDown={setHideDropDown}
      //   />
      // ),

      // filterIcon: (filtered) => (
      //   <AiFillCaretDown
      //     onClick={() => setHideDropDown(false)}
      //     type="filter"
      //     style={{ color: '#f87d4e' }}
      //   />
      // ),
      render: (status) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div className={styles.pinkRound}></div>
          {status}
        </div>
      ),
      width: 90,
    },
    {
      title: 'Documents',
      dataIndex: 'documents',
      width: 180,
      render: (docs) => (
        <DocView setDoocs={setDoocs} setIsDocVisible={setIsDocVisible} docs={docs ? docs : []} />
      ),
    },

    {
      title: 'Comments',
      dataIndex: 'comment',
      width: 110,
    },
  ];

  return (
    <>
      <Table
        loading={state.loading}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              if (e.target.innerText === 'View all' || e.target.innerText === 'View') {
                e.preventDefault();
              } else {
                navigate('/payments/:detail');
              }
            },
          };
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="payment_id"
      />
      <ViewDocsModal docs={doocs} isDocVisible={isDocVisible} setIsDocVisible={setIsDocVisible} />
    </>
  );
};

export default AntTable;
