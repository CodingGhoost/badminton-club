import MailCard from '@/components/MailCard';
import { Col, Row, Card, } from 'antd';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ fontSize:'35px', marginTop:'35px', marginLeft:'15px'}}>Welcome to UWBC, Wayne</h1>
      <Row style={{marginLeft:'15px'}}>
        <Col span={16}>
          <div style={{ height:'351px', border: '1px solid rgb(119, 119, 119)', borderRadius:'3px'}}>
            <MailCard />
          </div>
        </Col>
        <Col span={8}>
          <Card style={{ height: '350px', marginLeft:'30px', border: '1px solid rgb(119, 119, 119)',  }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row style={{marginLeft:'15px', marginTop:'25px'}} justify='space-between' >
        <Col span={5}>
          <Card style={{ height: '200px', border: '1px solid rgb(119, 119, 119)'}}>
            <p>SEELE</p>
            <p>SEELE</p>
            <p>SEELE</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card style={{ height: '200px', border: '1px solid rgb(119, 119, 119)'}}>
            <p>IKARI SHINJI</p>
            <p>IKARI SHINJI</p>
            <p>IKARI SHINJI</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card style={{ height: '200px', border: '1px solid rgb(119, 119, 119)'}}>
            <p>ASUKA</p>
            <p>ASUKA</p>
            <p>ASUKA</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card style={{ height: '200px', border: '1px solid rgb(119, 119, 119)'}}>
            <p>AYANAMI REI</p>
            <p>AYANAMI REI</p>
            <p>AYANAMI REI</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;