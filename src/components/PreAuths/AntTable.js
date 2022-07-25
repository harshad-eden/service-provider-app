import { Table } from 'antd';
import styles from './index.module.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Dropdown from './DropDown';
import DocView from '../DocView/DocView';
import ViewDocsModal from '../DocView/ViewDocs';
import { useState } from 'react';

const AntTable = ({ data }) => {
  const navigate = useNavigate();
  const [doocs, setDoocs] = useState([]);
  const [isDocVisible, setIsDocVisible] = useState(false);

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
      filterDropdown: () => <Dropdown />,
      onFilter: (value, record) => record.address.startsWith(value),
      filterIcon: () => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
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
      filters: [],
      filterIcon: () => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
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
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              if (e.target.innerText === 'View all' || e.target.innerText === 'View') {
                e.preventDefault();
              } else {
                navigate('/payments/detail');
              }
            },
          };
        }}
        rowKey="claim_number"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <ViewDocsModal docs={doocs} isDocVisible={isDocVisible} setIsDocVisible={setIsDocVisible} />
    </>
  );
};

export default AntTable;
