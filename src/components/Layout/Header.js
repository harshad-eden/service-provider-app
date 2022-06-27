import { Layout } from 'antd';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const HeaderComponenet = () => {
  const { Header: AntHeader } = Layout;
  return (
    <AntHeader style={{ backgroundColor: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <img src="/icons/notification.png" style={{ width: 30 }} alt="" />
          <img src="/icons/user.png" style={{ width: 30 }} alt="" />
        </div>
        <p style={{ marginBottom: 0 }}>Jhon Doe</p>
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
