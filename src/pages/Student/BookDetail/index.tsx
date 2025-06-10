import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import { getBooks, borrowBook } from '@/services/book';

export default function BookDetailPage() {
  const [books, setBooks] = useState<any[]>([]);

  const fetch = () => {
    const res = getBooks();
    setBooks(res);
  };

  useEffect(() => {
    fetch();
  }, []);

  const onBorrow = (book: any) => {
    const success = borrowBook(book);
    if (success) {
      message.success('Mượn sách thành công');
      fetch();
    } else {
      message.error('Không thể mượn sách');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Danh sách sách có sẵn</h2>
      <Table dataSource={books} rowKey="id" pagination={false}>
        <Table.Column title="Tên sách" dataIndex="title" />
        <Table.Column title="Tác giả" dataIndex="author" />
        <Table.Column title="Thể loại" dataIndex="category" />
        <Table.Column title="Số lượng" dataIndex="quantity" />
        <Table.Column
          title="Hành động"
          render={(_, record: any) => (
            <Button
              type="primary"
              disabled={record.quantity <= 0}
              onClick={() => onBorrow(record)}
            >
              Mượn
            </Button>
          )}
        />
      </Table>
    </div>
  );
}
