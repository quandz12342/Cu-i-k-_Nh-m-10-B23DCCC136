import { Card, Col, Row } from 'antd';

const books = [
  { title: 'Doraemon', description: 'Truyện tranh Nhật Bản nổi tiếng' },
  { title: 'Conan', description: 'Thám tử lừng danh' },
  { title: 'One Piece', description: 'Cuộc phiêu lưu của Luffy' },
];

export default () => {
  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        {books.map((book) => (
          <Col span={8} key={book.title}>
            <Card title={book.title}>{book.description}</Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
