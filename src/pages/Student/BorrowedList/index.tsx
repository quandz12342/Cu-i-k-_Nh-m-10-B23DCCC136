import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import { getBorrowedBooks, returnBook } from '@/services/book';

export default function BorrowedList() {
  const [borrowed, setBorrowed] = useState<any[]>([]);

  const fetch = () => {
    const data = getBorrowedBooks();
    setBorrowed(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const onReturn = (id: number) => {
    returnBook(id);
    message.success('Đã trả sách');
    fetch();
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Sách đã mượn</h2>
      <Table dataSource={borrowed} rowKey="id" pagination={false}>
        <Table.Column title="Tên sách" dataIndex="title" />
        <Table.Column title="Tác giả" dataIndex="author" />
        <Table.Column title="Thể loại" dataIndex="category" />
        <Table.Column
          title="Hành động"
          render={(_, record: any) => (
            <Button danger onClick={() => onReturn(record.id)}>Trả</Button>
          )}
        />
      </Table>
    </div>
  );
}
