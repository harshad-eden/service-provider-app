import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Upload, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UploadImg from '../../img/upload.png';
import CloseModalImg from '../../img/close-modal.png';
import { closePreAuth } from '../../store/dashboardSlice';
import styles from './index.module.css';

const { Dragger } = Upload;

const RequestPreAuth = ({ setIsModalVisible, isModalVisible }) => {
  const dispatch = useDispatch();
  const [searchVlue, setSearchVlue] = useState();
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
          <div>
            <h1 className="mbZero">New Pre-Auth</h1>
            <h5 className="mbZero">Fill in the below form to initiate the Pre-auth</h5>
          </div>
          <div style={{ width: '65%' }}>
            <h5 style={{ fontWeight: 700 }}>Member Number</h5>
            <Input
              onPressEnter={(e) => console.log(e)}
              prefix={<SearchOutlined className={styles.searchIcon} />}
              style={{ borderRadius: 15 }}
              placeholder="Search Member Number"
            />
          </div>
          <div>
            <h5 style={{ fontWeight: 700 }}>Upload Documents</h5>
            <Dragger>
              <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginLeft: 30 }}>
                <img style={{ height: 50 }} src={UploadImg} alt="UploadImg" />
                <div>
                  <h5 className="mbZero" style={{ fontWeight: 700 }}>
                    Browse to upload
                  </h5>
                  <p style={{ color: '#f87d4e', fontSize: 10, textAlign: 'start' }}>
                    Or Drag and Drop
                  </p>
                </div>
              </div>
            </Dragger>
          </div>
          <Button
            onClick={() => handleModalClose()}
            size="large"
            style={{ width: '55%' }}
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
