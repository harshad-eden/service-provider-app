import React from 'react';

const CustomButton = ({ text }) => {
  return (
    <div
      style={{
        borderRadius: 20,
        backgroundColor: 'white',
        cursor: 'pointer',
        color: '#3ab44d',
        fontWeight: 500,
        width: '50%',
        textAlign: 'center',
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      {text}
    </div>
  );
};

export default CustomButton;
