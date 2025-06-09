import { Form, Input, Button, Card } from 'antd';

export default () => (
  <div style={{ padding: 24 }}>
    <Card title="Cập nhật nội dung">
      <Form layout="vertical" onFinish={() => alert('Đã cập nhật!')}>
        <Form.Item label="Tên sách" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">Lưu</Button>
      </Form>
    </Card>
  </div>
);