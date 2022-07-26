import { Progress } from 'antd';
import React from 'react';
import ColorRound from '../Common/ColorRound';
import RoundArrow from '../Common/RoundArrow';
import styles from './index.module.css';

const RightSection = () => {
  return (
    <div style={{ width: '30%', backgroundColor: 'white', borderRadius: 20, padding: 20 }}>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Payments</h3>

        <Progress
          width={240}
          format={() => <div style={{ color: '#fd8d2d', fontWeight: 600 }}>86%</div>}
          trailColor=""
          success={{
            percent: 70,
            strokeColor: '#fd8d2d',
          }}
          type="circle"
        />
      </div>
      <div style={{ width: '90%', marginTop: 25 }}>
        <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }}>
          High-level Insight for Payments that has been processed and due.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
          <ColorRound height={10} width={10} color="#eaeaea" />
          <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }} className="mbZero">
            Allocation
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
          <ColorRound height={10} width={10} color="#fd8d2d" />
          <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }} className="mbZero">
            Utilised
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
            <ColorRound height={10} width={10} color="#db043e" />
            <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }} className="mbZero">
              Triggers Repricing
            </p>
          </div>
          <div style={{ marginTop: -10 }}>
            <RoundArrow text="View details" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
