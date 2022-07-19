import React from 'react';
import styles from './index.module.css';
import { Progress, Tooltip } from 'antd';
import { FaFingerprint } from 'react-icons/fa';
import ColorRound from '../Common/ColorRound';

import RoundArrow from '../Common/RoundArrow';

const BottomSection = () => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBox}>
        <div className={styles.progressBoxIn}>
          <div className="wHalf dGridCenter">
            <Tooltip title="60% approoved 40% denied">
              <Progress
                width={80}
                percent={60}
                trailColor="#f4bb1d"
                format={() => (
                  <div>
                    <img src="/sidebarIcons/claim.png" style={{ width: '25%' }} alt="altimg" />
                  </div>
                )}
                success={{
                  percent: 60,
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
                <p className={styles.yellowPrecentage}>40%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <ColorRound color="#f4bb1d" />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>Denied</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 15 }}>
              <RoundArrow text="View details" />
            </div>
          </div>
        </div>
      </div>
      {/* Two */}
      <div className={styles.progressBox}>
        <div className={styles.progressBoxIn}>
          <div className="wHalf dGridCenter">
            <Tooltip title="60% approoved 40% denied">
              <Progress
                strokeColor="gray"
                trailColor="#f4bb1d"
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
                  <ColorRound color="#626262" />
                  <p className="mbZero" style={{ fontSize: 8 }}>
                    Claims made in 30 Days
                  </p>
                </div>
              </div>

              <div>
                <p className={styles.yellowPrecentage}>40%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <ColorRound color="#f4bb1d" />
                  <p className="mbZero" style={{ fontSize: 8 }}>
                    Outstanding
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 15 }}>
              <RoundArrow text="View details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
