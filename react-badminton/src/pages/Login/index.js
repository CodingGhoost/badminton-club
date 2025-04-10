import { Button, Checkbox, Form, Input, Typography, Flex, Divider } from 'antd';
import { DeviconGoogle } from '@/assets/DeviconGoogle.jsx';
import uwbc from '@/assets/UWBC_cover.png';
import logo from '@/assets/logo.png'

const { Text, Link } = Typography;

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Login= () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{ height: '100vh', width:'45vw'}}>
        {/* login form */}
        <div style={{ marginTop: '5px', marginLeft: '15px', marginBottom: '-40px'}}> 
           <img
            src={logo}
            alt="logo"
            style={{ height: '75px', width: '75px' }}
            />
        </div>
        <div style={{ textAlign: 'center', marginTop: '120px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Login to your account</h1>
          <Text type="secondary">Enter your email below to login to your account</Text>
        </div>
        <div style={{ display:'flex', marginTop: '20px', backgroundColor: 'white', justifyContent: 'center', height: '400px'}}>
          <Form
          name="basic"
          layout="vertical"
          style={{ width: '320px' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          > 
            <Form.Item
              label="Email"
              name="email"
            >
              <Input placeholder="m@example.com"/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              style={{ marginTop:'-5px'}}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center" style={{ marginTop:'-25px'}}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link type="secondary" href="https://example.com" >
                  Forgot your password?
                </Link>
              </Flex>
            </Form.Item>

            <Form.Item style={{ marginTop:'-25px'}}>
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
              <Divider plain>
                <Text type="secondary">Or continue with</Text>
              </Divider>
              <Button block type="default" icon={<DeviconGoogle/>}>
                Login with Google
              </Button>
            </Form.Item>

            <Form.Item style={{ display:'flex', justifyContent:'center', marginTop:'-10px' }}>
              <Text>Don't have an account? </Text>
              <Link underline>Sign up</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div style={{ height: '100vh', backgroundColor:'Gray', minWidth:'55vw'}}>
        {/* login image */}
        <img
          src={uwbc}
          alt="uwbc_cover"
          style={{ height: '100vh', width: '100%' }}
        />
      </div>
    </div>
  );
}

export default Login;