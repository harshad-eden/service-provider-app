import Main from '../../template';
import styles from './index.module.css';
import { Button, Form, Input, Select } from 'antd';
import CollapseComponent from './Collapse';
const { Option } = Select;
const Index = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
    <Main>
      <div style={{ display: 'flex', marginTop: 80 }}>
        <section className={styles.section1}>
          <p style={{ fontSize: 38, fontWeight: 300, marginBottom: 10 }}>
            We are here to help you!
          </p>
          <p style={{ fontSize: 10, color: 'gray', marginBottom: 30 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry standard
          </p>
          <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
            <label className="fieldLabel" htmlFor="username">
              Area or section
            </label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Select
                className="support"
                placeholder="Select section"
                size="large"
                onChange={() => {}}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Form.Item>

            <label className="fieldLabel" htmlFor="username">
              Problem
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
              <Input.TextArea
                style={{ border: 'none', borderRadius: 25, fontSize: 14 }}
                rows={5}
                placeholder="Type here"
                className="support"
                size="large"
              />
            </Form.Item>
            <div style={{ marginTop: 25 }}>
              <Button size="large" shape="round" type="primary">
                Send message
              </Button>
            </div>
          </Form>
        </section>
        <section className={styles.section2}>
          <div
            style={{
              width: '80%',
              margin: 'auto',
            }}
          >
            <h2 style={{ fontWeight: 600, color: '#f87d4e' }}>
              Frequently asked Questions {'(FAQs)'}
            </h2>
            <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 30 }}>
              <CollapseComponent />
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;
