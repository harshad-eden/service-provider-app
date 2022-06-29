import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const text = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
`;

const CollapseComponent = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse
      expandIcon={() => <PlusOutlined style={{ fontSize: 20, color: '#f87d4e' }} />}
      accordion
      ghost
      defaultActiveKey={['1']}
      onChange={onChange}
    >
      <Panel header="Claims" key="1">
        <p style={{ marginLeft: 33, color: 'gray' }}>{text}</p>
      </Panel>
      <Panel header="Payment" key="2">
        <p style={{ marginLeft: 33, color: 'gray' }}> {text}</p>
      </Panel>
      <Panel header="Pre-Auths" key="3">
        <p style={{ marginLeft: 33, color: 'gray' }}>{text}</p>
      </Panel>
      <Panel header="Categories" key="3">
        <p style={{ marginLeft: 33, color: 'gray' }}>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent;
