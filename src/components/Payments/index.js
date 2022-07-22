import { useState } from 'react';
import styles from './index.module.css';
import AntTable from './AntTable';
import { Pagination } from 'antd';
import RequestPreAuth from './Modal';
import Main from '../../template';
import TopNav from '../../components/Common/TopNav';
import AddBox from '../../components/Common/AddBox';
import SearchAndFilter from '../../components/Common/SearchAndFilter';

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Main>
      <div style={{ marginTop: 20 }}>
        <SearchAndFilter />
      </div>
      <div className="mtLarge">
        <div className="mlLarge">
          <TopNav options={['Pending Payments', 'Paid Payments']} width={250} notification />
        </div>

        <div className={styles.table}>
          <AntTable />
        </div>
        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
          <Pagination size="small" total={50} />
        </div>
      </div>
      <RequestPreAuth isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </Main>
  );
};

export default Index;
