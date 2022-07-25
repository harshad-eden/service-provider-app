import { Button } from 'antd';
import React from 'react';

const ColumnItem = ({ data, setIsModalVisible, setTitle }) => {
  const handleClick = (title) => {
    setIsModalVisible(true);
    setTitle(title);
  };

  return data.map((item, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        width: '25%',
      }}
    >
      <img src={item.img} alt="" style={{ objectFit: 'contain', maxWidth: 100 }} />
      <div style={{ width: '100%' }}>
        <p
          style={{
            marginBottom: 3,
            fontSize: 12,
            lineHeight: 0,
            color: '#020202',
            fontWeight: 300,
          }}
        >
          {item.title}{' '}
        </p>
        <p style={{ fontWeight: 800, fontSize: 26, marginBottom: 0 }}>{item.count}</p>
        <Button
          onClick={() => handleClick(item.title)}
          size="small"
          style={{
            backgroundColor: item.color,
            color: 'white',
            borderColor: item.color,
            width: '70%',
          }}
          shape="round"
        >
          Filter
        </Button>
      </div>
    </div>
  ));
};

export default ColumnItem;
