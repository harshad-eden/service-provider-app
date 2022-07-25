import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './DropDown';

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
    render: (text) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: 70 }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: 70 }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
        </div>
        <Link
          style={{ fontSize: 10, fontWeight: 10, textDecoration: 'underline', color: '#f87d4e' }}
          to={'/'}
        >
          View all
        </Link>
      </div>
    ),
  },

  {
    title: 'Comments',
    dataIndex: 'comment',
    width: 110,
  },
];

const AntTable = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: () => navigate('/payments/detail'),
        };
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default AntTable;
