import MailCard from '@/components/MailCard';
import { Col, Row, Card, } from 'antd';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ fontSize:'35px', marginTop:'35px', marginLeft:'15px'}}>Welcome to UWBC, Wayne</h1>
      <Row style={{marginLeft:'15px'}}>
        <Col span={16}>
          <MailCard />
        </Col>
        <Col span={8}>
          <Card style={{ height: '300px', width: 300, marginLeft:'30px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;