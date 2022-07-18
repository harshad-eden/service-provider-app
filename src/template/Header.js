import { Dropdown, Layout, Menu } from 'antd';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

const HeaderComponenet = () => {
  const { Header: AntHeader } = Layout;

  const navigate = useNavigate();

  const handleMenuClick = async (e) => {
    if (e.key === '1') {
      navigate('/profile');
    }
    if (e.key === '2') {
      localStorage.clear();
      navigate('/login');
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Profile',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Logout',
          key: '2',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <AntHeader style={{ backgroundColor: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15 }}>
        <Dropdown overlay={menu}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <img src="/icons/notification.png" style={{ width: 30 }} alt="" />
            <img src="/icons/user.png" style={{ width: 30 }} alt="" />
          </div>
        </Dropdown>
        <p style={{ marginBottom: 0 }}>Jhon Doe</p>
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
