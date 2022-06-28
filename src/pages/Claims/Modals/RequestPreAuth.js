import { Button, Input, Upload, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UploadImg from '../../../img/upload.png';
import CloseModalImg from '../../../img/close-modal.png';
import styles from '../index.module.css';

const RequestPreAuth = ({ setIsModalVisible, isModalVisible }) => {
  const { Dragger } = Upload;

  return (
    <>
      <Modal bodyStyle={{ padding: 50 }} footer={null} visible={isModalVisible}>
        <div
          onClick={() => setIsModalVisible(false)}
          style={{ cursor: 'pointer' }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
          <div>
            <h1 className="mbZero">New Pre-Auth</h1>
            <h5 className="mbZero">Fill in the below form o patient ID</h5>
          </div>
          <div style={{ width: '65%' }}>
            <h5 style={{ fontWeight: 700 }}>Patient ID</h5>
            <Input
              prefix={<SearchOutlined className={styles.searchIcon} />}
              style={{ borderRadius: 15 }}
              placeholder="Search Patient ID"
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
                    Or Drag to Drop
                  </p>
                </div>
              </div>
            </Dragger>
          </div>
          <Button
            onClick={() => setIsModalVisible(false)}
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
