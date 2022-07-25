import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './DropDown';
import DocView from '../DocView/DocView';

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
    filters: [],
    filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
    width: 180,
    render: (docs) => <DocView docs={docs ? docs : []} />,
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
  );
};

export default AntTable;
