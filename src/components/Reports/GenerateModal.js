import { Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import { useDispatch } from 'react-redux';
import CloseModalImg from '../../img/close-modal.png';
import {
  approvedPreAuthsReport,
  getPaymentReport,
  pendingClaimsReport,
} from '../../store/reportSlice';
import styles from './index.module.css';

const GenerateReport = ({ setIsModalVisible, isModalVisible, title, status, loading }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (title === 'Pending claims') {
      dispatch(pendingClaimsReport({ modalOf: setIsModalVisible }));
    }
    if (title === 'Approved claims') {
      dispatch(pendingClaimsReport({ modalOf: setIsModalVisible }));
    }
    if (title === 'Pre-auths') {
      dispatch(approvedPreAuthsReport({ modalOf: setIsModalVisible }));
    }
    if (title === 'Payments') {
      dispatch(getPaymentReport({ modalOf: setIsModalVisible }));
    }
  };

  const { Option } = Select;

  return (
    <>
      <Modal
        className="fileClaim"
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
            <h1 className="mbZero">{title}</h1>
            <h5 className="mbZero">Fill in the form below to make filter</h5>
          </div>

          <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, width: '100%' }}>
              <div style={{ width: '50%' }}>
                <label>From Date</label>
                <Form.Item
                  name="from"
                  rules={[
                    {
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <DatePicker
                    className="fromDatePicker"
                    placeholder="Date from"
                    style={{ borderRadius: 20, width: '100%' }}
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </div>
              <div style={{ width: '50%' }}>
                <label>To Date</label>
                <Form.Item
                  name="to"
                  rules={[
                    {
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="Date to"
                    style={{ borderRadius: 20, width: '100%' }}
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </div>
            </div>
            <label>Status</label>
            <Form.Item name="status">
              <Select size="large" placeholder="Status">
                {status?.map((item) => (
                  <Option key={item} value="Active">
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <label>Amount</label>
            <Form.Item name="amount">
              <Input placeholder="Ammount" style={{ borderRadius: 20 }} size="large" />
            </Form.Item>
          </Form>

          <Button
            loading={loading}
            onClick={() => form.submit()}
            size="large"
            style={{ width: '55%' }}
            type="primary"
            shape="round"
          >
            Generate Report
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default GenerateReport;
