import { Button, Modal, Form, Input, DatePicker } from 'antd';

import CloseModalImg from '../../img/close-modal.png';
import styles from './index.module.css';

const GenerateReport = ({ setIsModalVisible, isModalVisible }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onChange = (values) => {
    console.log('Success:', values);
  };

  const handleClick = () => {
    form.submit();
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        className="fileCliam"
        bodyStyle={{ padding: 50 }}
        footer={null}
        visible={isModalVisible}
      >
        <div
          onClick={() => setIsModalVisible(false)}
          style={{ cursor: 'pointer' }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
          <div>
            <h1 className="mbZero">New Claim</h1>
            <h5 className="mbZero">Fill in the form below to make a New Claim</h5>
          </div>

          <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, width: '100%' }}>
              <div style={{ width: '50%' }}>
                <label>From Date</label>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="From date"
                    onChange={onChange}
                    style={{ borderRadius: 20 }}
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </div>
              <div style={{ width: '50%' }}>
                <label>To Date</label>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="To date"
                    onChange={onChange}
                    style={{ borderRadius: 20 }}
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </div>
            </div>
            <label>Status</label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="Status" style={{ borderRadius: 20 }} size="large" />
            </Form.Item>

            <label>Amount</label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="Ammount" style={{ borderRadius: 20 }} size="large" />
            </Form.Item>
          </Form>

          <Button
            onClick={handleClick}
            size="large"
            style={{ width: '55%' }}
            type="primary"
            shape="round"
          >
            File claim
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default GenerateReport;
