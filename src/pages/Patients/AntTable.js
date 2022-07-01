import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Member ID',
    dataIndex: 'memberID',
    width: 110,
  },
  {
    title: 'Staff ID',
    dataIndex: 'staffID',
    width: 100,
  },
  {
    title: 'Relation',
    dataIndex: 'relation',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: (status) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>{status}</div>
    ),
    width: 100,
  },
  {
    title: 'Date of birth',
    dataIndex: 'dateOfBirth',
    render: (status) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>{status}</div>
    ),
    width: 140,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div className={styles.pinkRound}></div>
        {status}
      </div>
    ),
    width: 100,
  },
];
const data = [];

for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    names: 'Jhon doe',
    memberID: '#45454',
    staffID: '#45454',
    relation: 'Wife',
    age: '32 years',
    dateOfBirth: '21st Aug 990',
    status: 'pending',
  });
}

const AntTable = () => <Table columns={columns} dataSource={data} pagination={false} />;

export default AntTable;
