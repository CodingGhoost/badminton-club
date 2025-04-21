import Icon, {
  HomeOutlined,
  IdcardOutlined,
  SearchOutlined,
  ScheduleOutlined,
  AppstoreOutlined,
  VerticalRightOutlined,
} from '@ant-design/icons';
import { ShuttleIcon } from '@/assets/ShuttleIcon.jsx';
import { Button, Layout, Menu, theme, Space } from 'antd';
import avatar from '@/assets/avatar.png';
const { Header, Sider, Content, Footer } = Layout;
const menuIconStyle = {
  fontSize:'20px',
}

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height: '100vh'}}>
      <Layout>
        <Sider style={{ background: '#000000'}} width={280}>
          <div style={{margin: '20px', color:'white'}}>Logo</div>
          <div style={{ height:'650px', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
            <Menu
              style={{ background: '#000000', fontSize:'15px' }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <AppstoreOutlined style={ menuIconStyle }/>,
                  label: 'Dashboard',
                },
                {
                  key: '2',
                  icon: <ScheduleOutlined style={ menuIconStyle }/>,
                  label: 'Session',
                },
                {
                  key: '3',
                  icon: <SearchOutlined style={ menuIconStyle }/>,
                  label: 'Search',
                },
                {
                  key: '4',
                  icon: <IdcardOutlined style={ menuIconStyle }/>,
                  label: 'Profile',
                },
              ]}
            />
            <div style={{padding:'20px', display:'flex', alignItems:'center'}}>
              <img
                src={avatar}
                alt="user_avatar"
                style={{ height: '45px', width: '45px', borderRadius: '50%', marginRight: '12px' }}
              />
              <div style={{color:'#ececec', fontSize:'16px', fontWeight:'bold'}}>
                Wayne Hao
              </div>
            </div>
          </div>
        </Sider>
        <Layout style={{ background: colorBgContainer }}>
          <Content>main content</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;