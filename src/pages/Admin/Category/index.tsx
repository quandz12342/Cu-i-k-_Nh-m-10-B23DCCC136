import { Table } from 'antd';

const data = [
  { key: '1', name: 'Truyện tranh', total: 120 },
  { key: '2', name: 'Tiểu thuyết', total: 80 },
];

export default () => (
  <div style={{ padding: 24 }}>
    <Table
      columns={[
        { title: 'Tên mục', dataIndex: 'name' },
        { title: 'Số lượng sách', dataIndex: 'total' },
      ]}
      dataSource={data}
    />
  </div>
);