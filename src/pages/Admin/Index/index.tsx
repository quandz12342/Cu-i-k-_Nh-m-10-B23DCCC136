import { Card, Col, Row } from 'antd';
export default () => {
  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        <Col span={8}><Card title="Tổng số người dùng">120</Card></Col>
        <Col span={8}><Card title="Sách đang được mượn">34</Card></Col>
        <Col span={8}><Card title="Thông báo đang hoạt động">5</Card></Col>
      </Row>
    </div>
  );
};