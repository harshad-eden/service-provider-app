import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './DropDown';

import { FullscreenExitOutlined } from '@ant-design/icons';

const data = [];

for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    names: 'Jhons',
    memberNumber: '#45454',
    documents: [],
    status: 'pending',
    comment: 'lorem lipsul lorem lipsul lorem ',
    claimNo: '#45454',
    transNo: '#45454',
    phoneNo: '0724548000',
    department: 'Sales and Marketing',
    view: 'View',
  });
}

const AntTable = ({ setIsDocVisible }) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Trans No',
      dataIndex: 'transNo',
      filters: [],
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
      width: 90,
    },
    {
      title: 'Member No',
      dataIndex: 'memberNumber',
      filters: [],
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
      width: 105,
    },
    {
      title: 'Names',
      dataIndex: 'names',
      width: 70,
    },
    {
      title: 'Phone No',
      dataIndex: 'phoneNo',
      filters: [],
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
      width: 70,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: 70,
      filters: [],
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
    },
    {
      title: 'Claim No',
      dataIndex: 'claimNo',
      filters: [],
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
      width: 90,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filterDropdown: (props) => <Dropdown />,
      onFilter: (value, record) => record.address.startsWith(value),
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
      render: (status) => (
        <div
          onClick={(e) => e.preventDefault()}
          style={{ display: 'flex', alignItems: 'center', gap: 5 }}
        >
          <div className={styles.pinkRound}></div>
          {status}
        </div>
      ),
      width: 100,
    },
    {
      title: 'Documents',
      dataIndex: 'Documents',
      filters: [],
      filterIcon: (filtered) => <AiFillCaretDown type="filter" style={{ color: '#f87d4e' }} />,
      width: 150,
      render: (text) => (
        <div
          onClick={() => setIsDocVisible(true)}
          style={{ display: 'flex', alignItems: 'center', zIndex: 10, position: 'sticky' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', width: 70 }}>
            <HiOutlineDocumentText size={30} color="#f87d4e" />
            <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: 70 }}>
            <HiOutlineDocumentText size={30} color="#f87d4e" />
            <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
          </div>
          <div
            style={{ fontSize: 10, fontWeight: 10, textDecoration: 'underline', color: '#f87d4e' }}
            to={'/'}
          >
            View all
          </div>
        </div>
      ),
    },
    {
      title: 'Comments',
      dataIndex: 'comment',
      width: 127,
    },
    // {
    //   title: 'View',
    //   dataIndex: 'view',
    //   width: 20,
    //   render: () => (
    //     <div style={{ display: 'grid', placeItems: 'center' }}>
    //       <FullscreenExitOutlined />
    //     </div>
    //   ),
    // },
  ];
  return (
    <Table
      onRow={() => {
        return {
          // onClick: () => navigate('/inpatients/detail'),
        };
      }}
      rowKey={(key) => console.log('!!', key)}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default AntTable;
