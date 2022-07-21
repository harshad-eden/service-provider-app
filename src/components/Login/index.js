import React from 'react';
import styles from './index.module.css';
import { Alert, Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import loginPic from '../../img/loginPic.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserWithEmail } from '../../store/authSlice';

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(loginUserWithEmail({ values, navigate }));
  };

  return (
    <div className={styles.container}>
      <img src={loginPic} alt="" className={styles.loginPic} />
      <div className={styles.box}>
        <img src="icons/logo.png" className={styles.logo} />
        <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
          <p className={styles.fieldLabel}>Username</p>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input placeholder="Enter your Email" className="customAntInput" size="large" />
          </Form.Item>

          <p className={styles.fieldLabel}>Password</p>
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

        {state.error && (
          <span style={{ color: 'red', marginTop: -20, marginBottom: -10 }}>{state.error}</span>
        )}
        <div className={styles.submitBtn}>
          <Button
            loading={state.loading}
            onClick={() => form.submit()}
            shape="round"
            style={{ width: '85%', backgroundColor: '#3ab44d', color: 'white' }}
            size="large"
            type="text"
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
