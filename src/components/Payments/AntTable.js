import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './DropDown';

import ViewDocsModal from '../DocView/ViewDocs';
import { useState } from 'react';

import DocView from '../DocView/DocView';

const AntTable = ({ data }) => {
  const navigate = useNavigate();
  const [doocs, setDoocs] = useState([]);
  const [isDocVisible, setIsDocVisible] = useState(false);

  const columns = [
    {
      title: 'Payment ID',
      dataIndex: 'payment_id',
      width: 105,
    },
    {
      title: 'Claim Number',
      dataIndex: 'claim_number',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'member',
      render: (item) => item.name,
      width: 100,
    },
    {
      title: 'Claim Type',
      dataIndex: 'claim',
      render: (item) => item.type,
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
      filterDropdown: (props) => <Dropdown />,
      onFilter: (value, record) => record.address.startsWith(value),
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
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
        rowKey="payment_id"
      />
      <ViewDocsModal docs={doocs} isDocVisible={isDocVisible} setIsDocVisible={setIsDocVisible} />
    </>
  );
};

export default AntTable;
