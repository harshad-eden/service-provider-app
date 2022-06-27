import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Member No',
    dataIndex: 'memberNumber',
    width: 90,
  },
  {
    title: 'Names',
    dataIndex: 'names',
    width: 80,
  },
  {
    title: 'Authority Processing',
    dataIndex: 'authorityProcessing',
    width: 148,
  },
  {
    title: 'Documents',
    dataIndex: 'Documents',
    width: 140,
    render: (text) => (
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8 }}>Request form</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8 }}>Request form</p>
        </div>
      </div>
    ),
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
  {
    title: 'Comments',
    dataIndex: 'comment',
    width: 127,
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    names: 'Jhon doe',
    memberNumber: '#45454',
    documents: [],
    address: 'London, Park Lane no',
    authorityProcessing: 'Dorcas Nyangayi',
    status: 'pending',
    comment: 'lorem lipsul lorem lipsul lorem ',
  });
}

const AntTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    scroll={{
      y: 200,
    }}
  />
);

export default AntTable;
