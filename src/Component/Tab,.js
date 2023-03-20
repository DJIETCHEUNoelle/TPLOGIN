import { Tabs } from 'antd';
import Login from './Login/Login';


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

  {
    key: '3',
    label: `SIGN IN`,
    children: `Content of Tab Pane 3`,
  },
];
const TabsComponent = () => <Tabs className='Tab' defaultActiveKey="1" items={items} onChange={onChange} />;
export default TabsComponent;