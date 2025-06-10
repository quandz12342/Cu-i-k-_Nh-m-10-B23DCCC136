import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getCategories } from '@/services/book';

export default function CategoryPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const res = getCategories();
    setData(res);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Danh sách mục sách</h2>
      <Table dataSource={data} rowKey="key" pagination={false}>
        <Table.Column title="Thể loại" dataIndex="name" render={(value: string) => {
          if (value === 'truyentranh') return 'Truyện tranh';
          if (value === 'tieuthuyet') return 'Tiểu thuyết';
          return value;
        }} />
        <Table.Column title="Số lượng sách" dataIndex="count" />
      </Table>
    </div>
  );
}
