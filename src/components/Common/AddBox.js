import React from 'react';
import { Link } from 'react-router-dom';

const AddBox = ({ value }) => {
  return (
    <Link to="/pre-auths" className="addBox">
      <img src="/icons/plusSign.webp" style={{ height: 40 }} alt="" />
      <div className="addBoxwhite">{value}</div>
    </Link>
  );
};

export default AddBox;
