import { Grid } from 'antd';
import React from 'react';
import styles from './index.module.css';

const DropDown = () => {
  return (
    <div
      style={{
        padding: 10,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div className={styles.pinkRound}></div>
        <p className="mbZero">Approved</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div className={styles.greenRound}></div>
        <p className="mbZero">Pending</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div className={styles.voiletRound}></div>
        <p className="mbZero">Declined</p>
      </div>
    </div>
  );
};

export default DropDown;
