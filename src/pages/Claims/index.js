import { useState } from 'react';
import Main from '../../components/Layout';
import TopNav from '../../components/Common/TopNav';
import styles from './index.module.css';
import AntTable from './AntTable';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AddBox from '../../components/Common/AddBox';
import { Pagination } from 'antd';
import RequestPreAuth from './FileClaim';

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Main>
      <div style={{ marginTop: 20 }}>
        <div style={{ width: '30%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Input
            size="large"
            style={{ border: 'none', borderRadius: 20 }}
            prefix={<SearchOutlined className={styles.searchIcon} />}
          />
          <img src="/icons/filter.png" alt="" style={{ height: 35 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div onClick={() => setIsModalVisible(true)}>
            <AddBox value="New Claim" />
          </div>
        </div>
      </div>
      <div className="mtLarge">
        <div className="mlLarge">
          <TopNav options={['Pending claims', 'Approved']} width={200} notification />
        </div>

        <div className={styles.table}>
          <AntTable />
        </div>
        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
          <Pagination size="small" total={50} />
        </div>
      </div>
      {/* <CommonModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} /> */}
      <RequestPreAuth isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </Main>
  );
};

export default Index;
