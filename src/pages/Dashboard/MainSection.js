import React from 'react';
import styles from './index.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AntTable from './AntTable';
import TabMenu from './TabMenu';
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
          <TabMenu />
        </div>
        <div className={styles.table}>
          <AntTable />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
