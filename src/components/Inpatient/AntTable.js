import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
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
      title: 'Phone No',
      dataIndex: 'phoneNo',
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
      filterDropdown: (props) => <Dropdown />,
      onFilter: (value, record) => record.address.startsWith(value),
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
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
        <>
          <DocView setDoocs={setDoocs} setIsDocVisible={setIsDocVisible} docs={docs ? docs : []} />
        </>
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
