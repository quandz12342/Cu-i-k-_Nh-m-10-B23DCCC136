import { Table, Button, message } from 'antd';
import { getBorrowedList, returnBook } from '@/services/borrow';
import React, { useState, useEffect } from 'react';

export default () => {
  const [data, setData] = useState<{ title: string; borrowedDate: string }[]>([]);

  const refresh = () => {
    setData(getBorrowedList());
  };

  const handleReturn = (title: string) => {
    returnBook(title);
    message.success(`Đã trả sách: ${title}`);
    refresh();
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <Table
        columns={[
          { title: 'Tên sách', dataIndex: 'title' },
          { title: 'Ngày mượn', dataIndex: 'borrowedDate' },
          {
            title: 'Thao tác',
            render: (_, record) => (
              <Button danger onClick={() => handleReturn(record.title)}>
                Trả
              </Button>
            ),
          },
        ]}
        dataSource={data}
        rowKey="title"
      />
    </div>
  );
};