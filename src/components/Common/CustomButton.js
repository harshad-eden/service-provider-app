import React from 'react';

const CustomButton = ({ text, backgroundColor, color, width }) => {
  return (
    <div
      style={{
        borderRadius: 20,
        backgroundColor: backgroundColor,
        cursor: 'pointer',
        color: color,
        fontWeight: 500,
        width: width,
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
