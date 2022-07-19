import React from 'react';

const ColorRound = ({ height, width, color }) => (
  <div style={{ height, width, backgroundColor: color, borderRadius: '50%' }} />
);

export default ColorRound;
