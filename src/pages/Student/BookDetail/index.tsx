import { Descriptions, Button, message } from 'antd';
import { borrowBook } from '@/services/borrow';

export default () => {
  const book = {
    title: 'Doraemon Tập 1',
    author: 'Fujiko F. Fujio',
    category: 'Truyện tranh',
    description: 'Câu chuyện về chú mèo máy đến từ tương lai.',
  };

  const handleBorrow = () => {
    borrowBook({ title: book.title, borrowedDate: new Date().toISOString().split('T')[0] });
    message.success('Đã mượn sách thành công!');
  };

  return (
    <div style={{ padding: 24 }}>
      <Descriptions title="Chi tiết sách">
        <Descriptions.Item label="Tên sách">{book.title}</Descriptions.Item>
        <Descriptions.Item label="Tác giả">{book.author}</Descriptions.Item>
        <Descriptions.Item label="Thể loại">{book.category}</Descriptions.Item>
        <Descriptions.Item label="Mô tả">{book.description}</Descriptions.Item>
      </Descriptions>
      <Button type="primary" style={{ marginTop: 16 }} onClick={handleBorrow}>
        Mượn ngay
      </Button>
    </div>
  );
};
