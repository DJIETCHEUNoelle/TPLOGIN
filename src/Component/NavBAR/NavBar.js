import { Tabs } from 'antd';
import Login from '../Login/Login';


const onChange = (key) => {
  console.log(key);
};



const items = [


  {
    key: '1',
    label: `ACUEILL`,
    children: `hhhhhhhh`,
  },


  {
    key: '2',
    label: `A PROPOS`,
    children: <Login/>,
  },


];
const TabsComponentNavBar = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default TabsComponentNavBar;