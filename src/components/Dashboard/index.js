import React from 'react';
import Main from '../../components/Layout';
import styles from './index.module.css';
import BottomSection from './BottomSection';
import MainSection from './MainSection';
import RightSection from './RightSection';

const Index = () => {
  return (
    <Main pageName="Dashboard">
      <>
        <section className={styles.firstSection}>
          <MainSection />
          <RightSection />
        </section>
        <BottomSection />
      </>
    </Main>
  );
};

export default Index;
