import { Timeline } from 'antd';
import styles from './index.module.css';

const App = () => {
  let step = 1;

  return (
    <div className={styles.stepContainer}>
      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDotActive} />
        </div>
        <div style={{ backgroundColor: '#3eb919' }} className={styles.progressLine} />
      </div>

      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDotActive} />
        </div>
        <div style={{ backgroundColor: '#eaa573' }} className={styles.progressLine} />
      </div>

      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDot} />
        </div>
        <div style={{ backgroundColor: '#e6eae5' }} className={styles.progressLine} />
      </div>

      <div className={styles.progressItem}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDot} />
        </div>
        <div
          style={step === 2 ? { backgroundColor: '#3eb919' } : { backgroundColor: '#e6eae5' }}
          className={styles.progressLine}
        />
      </div>

      <div className={styles.progressItemLast}>
        <div className={styles.stepDotRing}>
          <div className={styles.stepDot} />
        </div>
      </div>
    </div>
  );
};

export default App;
