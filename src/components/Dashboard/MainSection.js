import React from 'react';
import styles from './index.module.css';
import AntTable from './AntTable';
import TabMenu from '../Common/TopNav';
import BottomSection from './BottomSection';

const TopSection = () => {
  return (
    <div
      style={{
        width: '70%',
      }}
    >
      <div className={styles.table}>
        <TabMenu options={['Authorizations', 'Payments', 'Claims']} width={280} marginBottom={15} />
        <AntTable />
      </div>
      <BottomSection />
    </div>
  );
};

export default TopSection;
