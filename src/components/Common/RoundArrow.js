import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const RoundArrow = ({ text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: -10 }}>
      <div
        style={{
          height: 20,
          width: 20,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3ab44d',
        }}
      >
        <HiArrowNarrowRight size={10} color="white" />
      </div>
      <p style={{ fontSize: 10 }} className="mbZero">
        {text}
      </p>
    </div>
  );
};

export default RoundArrow;
