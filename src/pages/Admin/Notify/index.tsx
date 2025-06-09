import { List, Button } from 'antd';

const notifications = [
  { id: 1, content: 'Hệ thống sẽ bảo trì ngày 20/6' },
  { id: 2, content: 'Cập nhật thư viện mới' },
];

export default () => (
  <div style={{ padding: 24 }}>
    <List
      header={<strong>Thông báo hiện có</strong>}
      dataSource={notifications}
      renderItem={(item) => <List.Item>{item.content}</List.Item>}
    />
    <Button type="primary" style={{ marginTop: 16 }}>Thêm thông báo</Button>
  </div>
);