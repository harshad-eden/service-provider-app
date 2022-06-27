import React from 'react';
import styles from './index.module.css';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="icons/logo.png" className={styles.logo} />
        <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
          <label htmlFor="username">Username</label>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Enter your Username" className="customAntInput" size="large" />
          </Form.Item>

          <label className="label" htmlFor="username">
            Password
          </label>
          <Form.Item
            className="mbZero"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your Password"
              className="customAntInput"
              size="large"
            />
          </Form.Item>
          <Link to="/reset-password" className={styles.forgottPassword}>
            Forgot Password
          </Link>
        </Form>
        <div className={styles.submitBtn}>
          <Button
            onClick={() => form.submit()}
            className="custom-ant-button"
            shape="round"
            style={{ width: '85%' }}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
