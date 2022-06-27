import React from 'react';
import styles from './index.module.css';
import { Button, Form, Input } from 'antd';

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="icons/logo.png" className={styles.logo} />
        <div className={styles.sectionTwo}>
          <img src="/icons/important.png" className="importantIcon" />
          <p>Kindly enter your email address below to enable us reset your password</p>
        </div>
        <Form
          form={form}
          className="wFull"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <label htmlFor="username">Enter Email Address</label>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Enter your Email address" className="customAntInput" size="large" />
          </Form.Item>
        </Form>
        <div className={styles.submitBtn}>
          <Button
            className="custom-ant-button"
            onClick={() => form.submit()}
            shape="round"
            style={{ width: '85%' }}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
