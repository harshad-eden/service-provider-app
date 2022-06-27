import React from 'react';
import Main from '../../components/Layout';
import TopNav from '../../components/Common/TopNav';
import styles from './index.module.css';
import AntTable from './AntTable';
// import Iest from './Test';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// import TabMenu from './TabMenu';
import AddBox from '../../components/Common/AddBox';
import { Pagination } from 'antd';

const Index = () => {
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
          <AddBox value="New Pre-Auth" />
        </div>
      </div>
      <div className="mtLarge">
        <div className="mlLarge">
          <TopNav options={['Pending Pre-Auths', 'Approved', 'Declined']} width={300} />
          {/* <TabMenu options={['Pending Pre-Auths', 'Approved', 'Declined']} /> */}
        </div>

        <div className={styles.table}>
          <AntTable />
          {/* <Iest /> */}
        </div>
        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
          <Pagination size="small" total={50} />
        </div>
      </div>
    </Main>
  );
};

export default Index;
