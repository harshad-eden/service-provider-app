import Header from './Header';
// import SideBar from './SideBar.js';
import SideBar from './SideBar';
import SidebarCollapsed from './SidebarCollapse';
import styles from './index.module.css';
import { useState } from 'react';

function Main({ children, pageName }) {
  const [collapsed, setCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {collapsed ? (
        <div
          onMouseLeave={() => setCollapsed(true)}
          onMouseEnter={() => setCollapsed(false)}
          className={styles.sideBar}
        >
          <SidebarCollapsed />
        </div>
      ) : (
        <div
          onMouseLeave={() => setCollapsed(true)}
          onMouseEnter={() => setCollapsed(false)}
          className={styles.sideBarCollapsed}
        >
          <SideBar />
        </div>
      )}

      <div className={styles.contain}>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Main;
