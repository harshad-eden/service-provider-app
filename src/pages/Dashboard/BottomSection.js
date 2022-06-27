import React from 'react';
import styles from './index.module.css';
import { Progress, Tooltip } from 'antd';
import { FaFingerprint } from 'react-icons/fa';

const BottomSection = () => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBox}>
        <p className="mbFive">Claims</p>
        <div className={styles.progressBoxIn}>
          <div className="wHalf dGrid">
            <Tooltip title="60% approoved 40% denied">
              <Progress
                width={80}
                percent={100}
                format={() => (
                  <div>
                    <img src="/sidebarIcons/claim.png" style={{ width: '25%' }} alt="altimg" />
                  </div>
                )}
                success={{
                  percent: 40,
                }}
                type="circle"
              />
            </Tooltip>
          </div>
          <div className="wHalf">
            <p style={{ fontSize: 10, marginBottom: 12 }}>
              Lorem ipsum is simply dummy text of the printing of typesetting
            </p>
            <div className={styles.stacticsInfo}>
              <div>
                <p className={styles.greenPrecentage}>60%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div className={styles.greenDot} />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>Approved</p>
                </div>
              </div>
              <div>
                <p className={styles.bluePrecentage}>40%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div className={styles.blueDot} />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>Denied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Two */}
      <div className={styles.progressBox}>
        <p className="mbFive">Payments</p>
        <div className={styles.progressBoxIn}>
          <div className="wHalf dGrid">
            <Tooltip title="60% approoved 40% denied">
              <Progress
                strokeColor="#cb6ba2"
                trailColor="#246798"
                width={80}
                percent={60}
                format={() => (
                  <div>
                    <img src="/sidebarIcons/claim.png" style={{ width: '25%' }} alt="altimg" />
                  </div>
                )}
                success={{
                  percent: 0,
                }}
                type="circle"
              />
            </Tooltip>
          </div>
          <div className="wHalf">
            <p style={{ fontSize: 10, marginBottom: 12 }}>
              Lorem ipsum is simply dummy text of the printing of typesetting
            </p>
            <div className={styles.stacticsInfo}>
              <div>
                <p className={styles.greenPrecentage}>60%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#cb6ba2' }} className={styles.greenDot} />
                  <p style={{ fontSize: 10 }}>Approved</p>
                </div>
              </div>
              <div>
                <p className={styles.bluePrecentage}>40%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#246798' }} className={styles.blueDot} />
                  <p style={{ fontSize: 10 }}>Denied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Three */}
      <div className={styles.progressBox}>
        <p className="mbFive">TAT</p>
        <div className={styles.progressBoxIn}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: 20,
              width: '100%',
            }}
          >
            <div>
              {/* <FaFingerprint color="#9444e3" size={34} /> */}
              <img style={{ width: 70 }} src="/icons/fingerprintBlue.png" alt="fingerprintBlue" />
            </div>
            <div>
              <p style={{ fontSize: 10 }}>SMART to INVOICE</p>
              <p style={{ fontWeight: 'bold', fontSize: 24 }}>270</p>
            </div>
            <div>
              <p style={{ fontSize: 10 }}>Pre-Auth TAT</p>
              <p style={{ fontWeight: 'bold', fontSize: 24 }}>13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
