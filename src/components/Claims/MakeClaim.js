import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Modal, Select, Form, Radio, Divider } from 'antd';
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import CloseModalImg from '../../img/close-modal.png';
import { closePreAuth } from '../../store/dashboardSlice';
import styles from './index.module.css';
import DraggerComponent from './Upload';
import { getMemberByCardNumb, newClaim } from '../../store/claimSlice';

import Message from './Modals/CommonModal';

const { Option } = Select;

const RequestPreAuth = ({ setIsModalVisible, isModalVisible }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [form] = Form.useForm();
  const [files, setFiles] = useState([]);
  const [cardNumber, setCardNumber] = useState();
  const [wrongCardNumber, setWrongCardNumber] = useState(false);

  const { memeber, newClaimReqState } = useSelector((state) => state.claims);

  const handleSubmit = () => {
    let { amount, currency, type } = form.getFieldsValue();
    console.log(amount, currency, type);

    let formData = new FormData();
    let values = {
      member_card_number: cardNumber,
      invoice: { amount, currency },
      type,
    };
    formData.append('request', JSON.stringify(values));
    files.map((item) => formData.append('documents', item));
    dispatch(newClaim(formData));
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    dispatch(closePreAuth());
  };

  const handleSearch = (value) => {
    if (value.length === 12) {
      setWrongCardNumber(false);
      setCardNumber(value);
      dispatch(getMemberByCardNumb(value));
    } else {
      setWrongCardNumber(true);
    }
  };

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  console.log(memeber);

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
        {newClaimReqState.loaded ? (
          <Message
            status={newClaimReqState.status === 'success' ? true : false}
            setIsModalVisible={setIsModalVisible}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <h1 className="mbZero">New Claim</h1>
              <h5 className="mbZero">Fill in the form below to make a New Claim</h5>
            </div>

            <div style={{ width: '65%' }}>
              <h5 style={{ fontWeight: 700 }}>Member Number</h5>
              <Input
                onPressEnter={(e) => handleSearch(e.target.value)}
                prefix={
                  memeber.isSearchLoading ? (
                    <LoadingOutlined className={styles.searchIcon} />
                  ) : (
                    <SearchOutlined className={styles.searchIcon} />
                  )
                }
                style={{ borderRadius: 15 }}
                placeholder="Search Member Number"
                type="number"
              />
              {wrongCardNumber && (
                <p style={{ marginBottom: 0, marginTop: 5, color: 'red', fontSize: 12 }}>
                  Card number must be 12 digit
                </p>
              )}
            </div>

            {memeber.isSearchLoaded &&
              (memeber.data ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 15 }}>
                    <img
                      style={{ width: 50, height: 50, borderRadius: '50%' }}
                      src="https://images.unsplash.com/photo-1571346686046-7a21dbfc3ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                      alt=""
                    />
                    <div>
                      <h5 style={{ fontWeight: 700 }} className="mbZero">
                        {memeber.data.name}
                      </h5>
                      <p style={{ color: '#f87d4e', fontSize: 10 }}>{memeber.data.card_number}</p>
                    </div>
                  </div>

                  <Form
                    name="newForm"
                    form={form}
                    style={{
                      gap: 10,
                      marginTop: 4,
                      backgroundColor: '#f8f8f8',
                      padding: 10,
                      borderRadius: 15,
                    }}
                    onFinish={() => handleSubmit()}
                  >
                    <div style={{ display: 'flex', width: '100%', gap: 5, marginBottom: 5 }}>
                      <div style={{ width: '50%' }}>
                        <span style={{ fontSize: 10 }}>Amount</span>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: 'Please input amount!',
                            },
                          ]}
                          style={{ marginBottom: 0 }}
                          name="amount"
                        >
                          <Input
                            style={{ width: '100%', borderRadius: 15 }}
                            placeholder="Amount"
                            type="number"
                          />
                        </Form.Item>
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ fontSize: 10 }}>Currency</span>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: 'Please input currency!',
                            },
                          ]}
                          style={{ marginBottom: 0 }}
                          name="currency"
                        >
                          <Select style={{ width: '100%' }}>
                            <Option value="RWF">RWF</Option>
                            <Option value="Ksh">Ksh</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: 'Please input type!',
                        },
                      ]}
                      style={{ marginBottom: 0 }}
                      name="type"
                    >
                      <Radio.Group
                        style={{ display: 'flex', marginTop: 12 }}
                        onChange={onChange}
                        value={value}
                      >
                        <Radio style={{ width: '49%' }} value={'Outpatient'}>
                          Outpatient
                        </Radio>
                        <Radio value={'Inpatient'}>Inpatient</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Form>
                </div>
              ) : (
                <p style={{ color: 'red', marginLeft: 10, marginBottom: 0 }}>No memeber found</p>
              ))}

            <div>
              <h5 style={{ fontWeight: 700 }}>Upload Documents</h5>
              <DraggerComponent disabled={memeber.data ? false : true} setFiles={setFiles} />
            </div>
            <Button
              loading={newClaimReqState.loading}
              disabled={files.length < 1}
              onClick={() => form.submit()}
              size="large"
              style={{ width: '55%' }}
              type="primary"
              shape="round"
              htmlType="submit"
            >
              Request Pre-auth
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default RequestPreAuth;
