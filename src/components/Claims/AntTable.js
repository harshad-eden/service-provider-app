import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './DropDown';

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
    dataIndex: 'Documents',
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
    width: 127,
  },
];

const AntTable = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: () => navigate('/claims/patient'),
        };
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default AntTable;
