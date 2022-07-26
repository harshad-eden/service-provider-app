import { Table } from 'antd';
import styles from './index.module.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../Common/StatusDropDown';
import DocView from '../../DocView/DocView';
import ViewDocsModal from '../../DocView/ViewDocs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPreAuthsWithFilter } from '../../../store/preAuthSlice';

const AntTable = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doocs, setDoocs] = useState([]);
  const [filterState, setFilter] = useState('');
  const [hideDropDown, setHideDropDown] = useState('');
  const [isDocVisible, setIsDocVisible] = useState(false);

  const state = useSelector((state) => state.preAuth);

  useEffect(() => {
    if (filterState !== '') {
      dispatch(getPreAuthsWithFilter(filterState));
      setFilter('');
    }
  }, [filterState]);

  let statusArr = [
    { color: '#2da028', text: 'Approved' },
    { color: '#9f3ade', text: 'Processing' },
    { color: '#e00f65', text: 'Declined' },
    { color: 'blue', text: 'Received' },
  ];

  const columns = [
    {
      title: 'Pre-Auth ID',
      dataIndex: 'pre_auth_id',

      width: 110,
    },
    {
      title: 'Member No',
      dataIndex: 'member_card_number',

      width: 105,
    },
    {
      title: 'Phone No',
      dataIndex: 'phoneNo',
      width: 70,
    },
    {
      title: 'Employer',
      dataIndex: 'member',
      render: (item) => item.employer_name,
      width: 70,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filterDropdown: () => (
        <Dropdown
          statusArr={statusArr}
          hideDropDown={hideDropDown}
          setHideDropDown={setHideDropDown}
          setFilter={setFilter}
        />
      ),
      filterIcon: () => (
        <AiFillCaretDown
          onClick={() => setHideDropDown(false)}
          type="filter"
          style={{ color: '#f87d4e' }}
        />
      ),
      render: (status) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div className={styles.pinkRound}></div>
          {status}
        </div>
      ),
      width: 100,
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
      width: 127,
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
                navigate(`/pre-auths/${record.id}`);
              }
            },
          };
        }}
        rowKey="pre_auth_id"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <ViewDocsModal docs={doocs} isDocVisible={isDocVisible} setIsDocVisible={setIsDocVisible} />
    </>
  );
};

export default AntTable;
