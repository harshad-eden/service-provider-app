import React from 'react';
import styles from './index.module.css';
import { Progress, Tooltip } from 'antd';
import { FaFingerprint } from 'react-icons/fa';
import ColorRound from '../Common/ColorRound';

import RoundArrow from '../Common/RoundArrow';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BottomSection = () => {
  const navigate = useNavigate();
  const { stats } = useSelector((state) => state.reports);

  // const { pre_auth_stats, payment_stats, claim_stats } = stats;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBox}>
        <div className={styles.progressBoxIn}>
          <div className="wHalf dGridCenter">
            <Tooltip title="60% approoved 40% denied">
              <Progress
                width={80}
                trailColor="#f4bb1d"
                strokeColor="gray"
                success={{
                  percent: 25,
                }}
                format={() => (
                  <div>
                    <img src="/sidebarIcons/claim.png" style={{ width: '25%' }} alt="altimg" />
                  </div>
                )}
                type="circle"
              />
            </Tooltip>
          </div>
          <div className="wHalf">
            <p style={{ fontSize: 10, marginBottom: 12 }}>
              Real-time Insight for Pre-Auths that has been requested for.
            </p>
            <div className={styles.stacticsInfo}>
              <div>
                <p className={styles.greenPrecentage}>25%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div className={styles.greenDot} />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>Approved</p>
                </div>
              </div>
              <div>
                <p className={styles.yellowPrecentage}>75%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <ColorRound color="#f4bb1d" />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>In-process</p>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate('/pre-auths')}
              style={{ marginTop: 15, cursor: 'pointer' }}
            >
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
                width={80}
                trailColor="#f4bb1d"
                strokeColor="gray"
                success={{
                  percent: 25,
                }}
                format={() => (
                  <div>
                    <img src="/sidebarIcons/claim.png" style={{ width: '25%' }} alt="altimg" />
                  </div>
                )}
                type="circle"
              />
            </Tooltip>
          </div>
          <div className="wHalf">
            <p style={{ fontSize: 10, marginBottom: 12 }}>
              Real-time Insight for Claims that has been filed.
            </p>
            <div className={styles.stacticsInfo}>
              <div>
                <p className={styles.greenPrecentage}>25%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <ColorRound color="#626262" />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>Approved</p>
                </div>
              </div>

              <div>
                <p className={styles.yellowPrecentage}>75%</p>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <ColorRound color="#f4bb1d" />
                  <p style={{ marginBottom: 0, fontSize: 10 }}>In-process</p>
                </div>
              </div>
            </div>
            <div onClick={() => navigate('/claims')} style={{ marginTop: 15, cursor: 'pointer' }}>
              <RoundArrow text="View details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
