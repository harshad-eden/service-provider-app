import React from 'react';

const TopNav = ({ options, width }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width,
        justifyContent: 'space-between',
        marginBottom: 30,
      }}
    >
      {options.map((item, index) =>
        index === 0 ? (
          <div
            style={{ paddingBottom: 8, fontWeight: 700, fontSize: 13 }}
            className="activeTopNavLi"
            key={item}
          >
            {item}
          </div>
        ) : (
          <div style={{ paddingBottom: 10 }} className="topNav" key={item}>
            {item}
          </div>
        ),
      )}
    </div>
  );
};

export default TopNav;
