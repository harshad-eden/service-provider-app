import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Upload, Modal, Select } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import UploadImg from '../../img/upload.png';
import CloseModalImg from '../../img/close-modal.png';
import { closePreAuth } from '../../store/dashboardSlice';
import { getMemberByCardNumb } from '../../store/preAuthSlice';
import styles from './index.module.css';

import Loader from '../../components/Common/Loader';

const { Dragger } = Upload;
const { Option } = Select;

const RequestPreAuth = ({ setIsModalVisible, isModalVisible }) => {
  const [currency, setCurrency] = useState();
  const dispatch = useDispatch();
  const { openPreAuth } = useSelector((state) => state.dashboard);
  const { memeber } = useSelector((state) => state.preAuth);

  useEffect(() => {
    if (openPreAuth) {
      setIsModalVisible(true);
    }
  }, [openPreAuth]);

  const handleModalClose = () => {
    setIsModalVisible(false);
    dispatch(closePreAuth());
  };

  const handleSearch = (value) => {
    dispatch(getMemberByCardNumb(value));
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
              onPressEnter={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined className={styles.searchIcon} />}
              style={{ borderRadius: 15 }}
              placeholder="Search Member Number"
              type="number"
            />
          </div>

          {memeber.data && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <img
                  style={{ width: 50, height: 50, borderRadius: '50%' }}
                  src="https://images.unsplash.com/photo-1571346686046-7a21dbfc3ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                  alt=""
                />

                <div>
                  <h5 style={{ fontWeight: 700 }} className="mbZero">
                    Jhon Deo
                  </h5>
                  <p style={{ color: '#f87d4e', fontSize: 10 }}>#000000</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <div style={{ width: '50%' }}>
                  <span style={{ fontSize: 10 }}>Amount</span>
                  <Input
                    style={{ width: '100%', borderRadius: 15 }}
                    placeholder="Amount"
                    type="number"
                  />
                </div>
                <div style={{ width: '50%' }}>
                  <span style={{ fontSize: 10 }}>Currency</span>
                  <Select
                    style={{ width: '100%' }}
                    defaultValue="RWF"
                    onChange={() => setCurrency()}
                  >
                    <Option value="RWF">RWF</Option>
                    <Option value="Ksh">Ksh</Option>
                  </Select>
                </div>
              </div>
            </div>
          )}

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
