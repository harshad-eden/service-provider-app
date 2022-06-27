import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
import { useNavigate } from 'react-router-dom';

const onChange = (key) => {
  console.log(key);
};

const TabsComponent = ({ options }) => {
  const navigate = useNavigate();
  return (
    <Tabs defaultActiveKey="1" onChange={(e) => navigate(`/${e}`)}>
      <TabPane tab={options[0]} key="authorisations" />
      <TabPane tab={options[1]} key="payments" />
      <TabPane tab={options[2]} key="claims" />
    </Tabs>
  );
};
export default TabsComponent;
