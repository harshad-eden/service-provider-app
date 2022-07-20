import Header from './Header';
// import SideBar from './SideBar.js';
import SideBar from './SideBar';
import styles from './index.module.css';

function Main({ children }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideBar />
      <div className={styles.contain}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Main;
