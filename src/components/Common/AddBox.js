import React from 'react';
import { Link } from 'react-router-dom';

const AddBox = ({ value }) => {
  return (
    <div className="addBox">
      <img src="/icons/plusSign.webp" style={{ height: 40 }} alt="" />
      <div className="addBoxwhite">{value}</div>
    </div>
  );
};

export default AddBox;
