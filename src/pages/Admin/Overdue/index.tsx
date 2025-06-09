import { Table } from 'antd';

const data = [
  { key: '1', user: 'Nguyễn Văn A', book: 'Conan Tập 10', due: '2025-06-01' },
  { key: '2', user: 'Trần Thị B', book: 'Doraemon Tập 5', due: '2025-06-03' },
];

export default () => (
  <div style={{ padding: 24 }}>
    <Table
      columns={[
        { title: 'Người mượn', dataIndex: 'user' },
        { title: 'Tên sách', dataIndex: 'book' },
        { title: 'Ngày hết hạn', dataIndex: 'due' },
      ]}
      dataSource={data}
    />
  </div>
);
