import React, { useEffect } from 'react';
import Main from '../../template';
import styles from './index.module.css';
import MainSection from './MainSection';
import RightSection from './RightSection';
import { getStats } from '../../store/reportSlice';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TopSection from './TopSection';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';

const Index = () => {
  const dispatch = useDispatch();
  const { statsLoading } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(getStats());
  }, []);

  return (
    <Main pageName="Dashboard">
      {statsLoading ? (
        <Loader />
      ) : (
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
      )}
    </Main>
  );
};

export default Index;
