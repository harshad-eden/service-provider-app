import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
import { useNavigate } from 'react-router-dom';

const onChange = (key) => {
  console.log(key);
};

const TabsComponent = () => {
  const navigate = useNavigate();
  return (
    <Tabs defaultActiveKey="1" onChange={(e) => navigate(`/${e}`)}>
      <TabPane tab="Authorisations" key="authorisations" />
      <TabPane tab="Payments" key="payments" />
      <TabPane tab="Claims" key="claims" />
    </Tabs>
  );
};
export default TabsComponent;
