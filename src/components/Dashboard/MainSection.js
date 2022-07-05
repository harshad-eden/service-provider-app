import React from 'react';
import styles from './index.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AntTable from './AntTable';
import TabMenu from '../../components/Common/TopNav';
import { openPreAuth } from '../../store/dashboardSlice';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const TopSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenPreAuth = () => {
    dispatch(openPreAuth());
    navigate('/pre-auths');
  };

  return (
    <div
      style={{
        width: '74%',
      }}
    >
      <div className="dfsBetween">
        <div style={{ width: '45%' }}>
          <Input
            style={{ border: 'none' }}
            prefix={<SearchOutlined className={styles.searchIcon} />}
            className="customAntInput"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div onClick={() => handleOpenPreAuth()}>
            <div className="addBox">
              <img src="/icons/plusSign.webp" style={{ height: 40 }} alt="" />
              <div className="addBoxWhite">New Pre-Auth</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mtLarge">
        <div className="mlLarge">
          <TabMenu
            options={['Authorizations', 'Payments', 'Claims']}
            width={280}
            marginBottom={15}
          />
        </div>
        <div className={styles.table}>
          <AntTable />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
