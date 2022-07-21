import React from 'react';
import Sticker from '../img/sticker.png';

const StickerComponent = ({ height, width }) => {
  return (
    <div>
      <div
        style={{
          height: height ? height : 100,
          width: width ? width : 80,
          backgroundColor: 'white',
          borderRadius: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <img src={Sticker} style={{ height: 75, marginTop: -45 }} alt="" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            alignItems: 'flex-end',
            marginTop: 5,
            lineHeight: 1.2,
          }}
        >
          <p className="mbZero" style={{ fontSize: 9, fontWeight: 800 }}>
            Urgent
          </p>
          <p className="mbZero" style={{ fontSize: 12, fontWeight: 800, color: '#f87d4e' }}>
            Claims
          </p>
        </div>
        <div
          style={{
            height: 22,
            width: '80%',
            backgroundColor: '#f87d4e',
            fontSize: 8,
            fontWeight: 500,
            color: 'white',
            borderRadius: 10,
            display: 'grid',
            placeItems: 'center',
            marginTop: 10,
            cursor: 'pointer',
          }}
        >
          view more
        </div>
      </div>
    </div>
  );
};

export default StickerComponent;
