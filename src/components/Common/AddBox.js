import React from 'react';

const AddBox = ({ setIsModalVisible, value }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div onClick={() => setIsModalVisible(true)}>
        <div className="addBox">
          <img src="/icons/plusSign.webp" style={{ height: 40 }} alt="" />
          <div className="addBoxWhite">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default AddBox;
