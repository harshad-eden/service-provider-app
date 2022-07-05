import React from 'react';

const TopNav = ({ options, width, marginBottom, notification }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width,
        justifyContent: 'space-between',
        marginBottom: marginBottom ? marginBottom : 30,
      }}
    >
      {options.map((item, index) =>
        index === 0 ? (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            {notification && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 20,
                  width: 20,
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  fontSize: 8,
                  color: 'white',
                  position: 'absolute',
                  right: -5,
                  top: 0,
                }}
              >
                23
              </div>
            )}

            <div
              style={{ paddingBottom: 6, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
              className="activeTopNavLi"
              key={item}
            >
              {item}
            </div>
          </div>
        ) : (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div style={{ paddingBottom: 10, cursor: 'pointer' }} className="topNav" key={item}>
              {item}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default TopNav;
