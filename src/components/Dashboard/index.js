import React from 'react';
import Main from '../../template';
import styles from './index.module.css';
import MainSection from './MainSection';
import RightSection from './RightSection';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TopSection from './TopSection';

const Index = () => {
  return (
    <Main pageName="Dashboard">
      <>
        <div style={{ width: '35%' }}>
          <Input
            style={{ border: 'none' }}
            prefix={<SearchOutlined className={styles.searchIcon} />}
            className="customAntInput"
          />
        </div>
        <TopSection />
        <section className={styles.firstSection}>
          <MainSection />
          <RightSection />
        </section>
      </>
    </Main>
  );
};

export default Index;
