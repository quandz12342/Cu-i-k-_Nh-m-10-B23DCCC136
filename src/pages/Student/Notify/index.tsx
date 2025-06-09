import { List } from 'antd';

const data = [
  'Bạn còn 1 sách quá hạn: "Conan Tập 5"',
  'Mượn sách mới: Doraemon Tập 10 thành công!',
];

export default () => (
  <div style={{ padding: 24 }}>
    <List
      header={<strong>Thông báo của bạn</strong>}
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </div>
);
