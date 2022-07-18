import React from 'react';
import styles from './index.module.css';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import loginPic from '../../img/loginPic.png';

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className={styles.container}>
      <img src={loginPic} alt="" className={styles.loginPic} />
      <div className={styles.box}>
        <img src="icons/logo.png" className={styles.logo} />
        <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
          <p className={styles.fieldLabel} htmlFor="username">
            Username
          </p>
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

          <p className={styles.fieldLabel} htmlFor="username">
            Password
          </p>
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
          <Link to="/reset-password-request" className={styles.forgottPassword}>
            Forgot Password
          </Link>
        </Form>
        <div className={styles.submitBtn}>
          <Button
            onClick={() => form.submit()}
            className="custom-ant-button"
            shape="round"
            style={{ width: '85%', marginBottom: 30, marginTop: 25 }}
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
