import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RiFingerprintLine } from 'react-icons/ri';
import styles from './index.module.css';
import { openPreAuth } from '../../store/dashboardSlice';
import CustomButton from '../Common/CustomButton';

const TopSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenPreAuth = () => {
    dispatch(openPreAuth());
    navigate('/pre-auths');
  };

  return (
    <div className={styles.firstSection}>
      <div
        style={{
          backgroundColor: 'white',
          padding: 25,
          borderRadius: 15,
          width: '70%',
          minHeight: 130,
        }}
      >
        <h3 style={{ color: '#3ab44d' }}>Good morning Ekansh</h3>
        <p style={{ color: '#626262', width: '80%' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy
        </p>
      </div>
      <div
        style={{
          backgroundColor: '#3ab44d',
          padding: 10,
          borderRadius: 15,
          width: '30%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '25%', display: 'grid', placeItems: 'center' }}>
          <RiFingerprintLine color="white" size={50} />
        </div>
        <div style={{ width: '75%' }}>
          <p style={{ marginBottom: 0, fontSize: 13, color: 'white', padding: 10 }}>
            Lorem Ipsum is simply dummy text of the printing
          </p>

          <div onClick={() => handleOpenPreAuth()}>
            <CustomButton width="50%" backgroundColor="white" color="#3ab44d" text="New Pre-Auth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
