import { Timeline } from 'antd';

export default () => (
  <div style={{ padding: 24 }}>
    <Timeline
      items={[
        { children: 'Sinh viên A mượn sách "One Piece" lúc 10:00 1/6' },
        { children: 'Admin cập nhật mục "Tiểu thuyết" lúc 14:00 3/6' },
      ]}
    />
  </div>
);