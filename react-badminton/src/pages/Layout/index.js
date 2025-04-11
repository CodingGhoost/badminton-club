import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
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
        <Sider style={{ background: '#000000'}} width={240} >
          <div style={{margin: '20px', color:'white'}}>Logo</div>
          <Menu
            style={{ background: '#000000', fontSize:'18px' }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined style={ menuIconStyle }/>,
                label: 'Dashboard',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined style={ menuIconStyle }/>,
                label: 'Courts',
              },
              {
                key: '3',
                icon: <UploadOutlined style={ menuIconStyle }/>,
                label: 'Members',
              },
            ]}
          />
        </Sider>
        <Layout style={{ background: colorBgContainer }}>
          <Content>main content</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;