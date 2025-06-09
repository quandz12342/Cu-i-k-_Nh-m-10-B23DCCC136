import { Card, Form, Input, Button, message } from 'antd';

export default () => {
  const onFinish = (values: any) => {
    message.success('Đăng ký thành công!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card title="Đăng ký tài khoản" style={{ width: 350 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Tên đăng nhập" name="username" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item label="Mật khẩu" name="password" rules={[{ required: true }]}> <Input.Password /> </Form.Item>
          <Form.Item> <Button type="primary" htmlType="submit" block> Đăng ký </Button> </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
