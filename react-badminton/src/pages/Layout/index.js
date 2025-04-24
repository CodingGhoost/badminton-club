import {
  IdcardOutlined,
  SearchOutlined,
  ScheduleOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, theme, Space } from 'antd';
import avatar from '@/assets/avatar.png';
import logoWhite from '@/assets/Logo-White.png'
const { Sider } = Layout;
const menuIconStyle = {
  fontSize:'22px',
}

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const onMenuClick = (route) => {
    const path = route.key;
    navigate(path);
  }

  return (
    <Layout style={{height: '100vh'}}>
      <Layout>
        <Sider style={{ background: '#000000'}} width={280}>
          <div style={{margin: '20px'}}>
            <img style={{height:'55px'}} src={logoWhite} alt='logo-white'/>
          </div>
          <div style={{ height:'610px', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
            <Menu
              style={{ background: '#000000', fontSize:'16px' }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['/dashboard']}
              onClick={onMenuClick}
              items={[
                {
                  key: '/dashboard',
                  icon: <AppstoreOutlined style={ menuIconStyle }/>,
                  label: 'Dashboard',
                },
                {
                  key: '/session',
                  icon: <ScheduleOutlined style={ menuIconStyle }/>,
                  label: 'Session',
                },
                {
                  key: '/search',
                  icon: <SearchOutlined style={ menuIconStyle }/>,
                  label: 'Search',
                },
                {
                  key: '/profile',
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
        <Layout style={{ background: colorBgContainer, padding:'0 20px 20px 20px' }}>
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;