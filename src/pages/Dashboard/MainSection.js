import React from 'react';
import styles from './index.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AntTable from './AntTable';
import TabMenu from '../../components/Common/TopNav';
import AddBox from '../../components/Common/AddBox';

const TopSection = () => {
  return (
    <div
      style={{
        width: '74%',
      }}
    >
      <div className="dfsBetween">
        <div style={{ width: '45%' }}>
          <Input
            style={{ border: 'none' }}
            prefix={<SearchOutlined className={styles.searchIcon} />}
            className="customAntInput"
          />
        </div>
        <AddBox value="New Pre-Auth" />
      </div>
      <div className="mtLarge">
        <div className="mlLarge">
          <TabMenu
            options={['Authorizations', 'Payments', 'Claims']}
            width={280}
            marginBottom={14}
          />
        </div>
        <div className={styles.table}>
          <AntTable />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
