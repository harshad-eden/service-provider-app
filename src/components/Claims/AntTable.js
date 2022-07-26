import { Table } from 'antd';
import styles from './index.module.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Common/StatusDropDown';
import DocView from '../DocView/DocView';
import ViewDocsModal from '../DocView/ViewDocs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClaimsWithFilter } from '../../store/claimSlice';

const AntTable = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doocs, setDoocs] = useState([]);
  const [isDocVisible, setIsDocVisible] = useState(false);
  const [hideDropDown, setHideDropDown] = useState();
  const [filterState, setFilter] = useState('');

  const state = useSelector((state) => state.claims);

  let statusArr = [
    { color: '#2da028', text: 'Approved' },
    { color: '#9f3ade', text: 'Processing' },
    { color: '#e00f65', text: 'Declined' },
    { color: 'blue', text: 'Received' },
    { color: 'gray', text: 'Settled' },
  ];

  useEffect(() => {
    if (filterState !== '') {
      dispatch(getClaimsWithFilter(filterState));
      setFilter('');
    }
  }, [filterState]);

  const columns = [
    {
      title: 'Member No',
      dataIndex: 'member_card_number',
      width: 105,
    },
    {
      title: 'Name',
      dataIndex: 'member',
      render: (item) => item.name,
      width: 70,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: 70,
    },
    {
      title: 'Email',
      dataIndex: 'member',
      render: (item) => item.email,
      width: 90,
    },
    {
      title: 'Employer',
      dataIndex: 'member',
      render: (item) => item.employer_name,
      width: 70,
    },
    {
      title: 'Claim No',
      dataIndex: 'claim_number',
      width: 90,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filterDropdown: () => (
        <Dropdown
          statusArr={statusArr}
          hideDropDown={hideDropDown}
          setFilter={setFilter}
          setHideDropDown={setHideDropDown}
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
        onRow={(record) => {
          return {
            onClick: (e) => {
              if (e.target.innerText === 'View all' || e.target.innerText === 'View') {
                e.preventDefault();
              } else {
                navigate(`/claims/${record.id}`);
              }
            },
          };
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="claim_number"
      />
      <ViewDocsModal docs={doocs} isDocVisible={isDocVisible} setIsDocVisible={setIsDocVisible} />
    </>
  );
};

export default AntTable;
