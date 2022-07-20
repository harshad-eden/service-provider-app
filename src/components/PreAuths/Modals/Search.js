import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Upload, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UploadImg from '../../../img/upload.png';
import CloseModalImg from '../../../img/close-modal.png';
import { closePreAuth } from '../../../store/dashboardSlice';
import styles from '../index.module.css';

const { Dragger } = Upload;

const RequestPreAuth = ({ setIsModalVisible, isModalVisible }) => {
  const dispatch = useDispatch();
  const { openPreAuth } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (openPreAuth) {
      setIsModalVisible(true);
    }
  }, [openPreAuth]);

  const handleModalClose = () => {
    setIsModalVisible(false);
    dispatch(closePreAuth());
  };

  return (
    <>
      <Modal bodyStyle={{ padding: 50 }} footer={null} visible={isModalVisible}>
        <div
          onClick={() => handleModalClose()}
          style={{ cursor: 'pointer' }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 35,
          }}
        >
          <div>
            <h2 style={{ textAlign: 'center', fontWeight: 700 }} className="mbZero">
              New Pre-Auth
            </h2>
            <h5 className="mbZero">Fill in the below form to initaitethe Pre-auth</h5>

            <div style={{ marginTop: 30 }}>
              <h5 style={{ fontWeight: 700, textAlign: 'center' }}>Claim Number</h5>
              <Input
                prefix={<SearchOutlined className={styles.searchIcon} />}
                style={{ borderRadius: 15 }}
                placeholder="Search Claim Number"
              />
            </div>

            <div style={{ marginTop: 30 }}>
              <h5 style={{ fontWeight: 700, textAlign: 'center' }}>Smart Amount</h5>
              <Input
                prefix={<SearchOutlined className={styles.searchIcon} />}
                style={{ borderRadius: 15 }}
                placeholder="Enter smart amount"
              />
            </div>
          </div>

          <Button
            onClick={() => handleModalClose()}
            size="large"
            style={{ width: '55%', marginTop: 30 }}
            type="primary"
            shape="round"
          >
            Request Pre-auth
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RequestPreAuth;
