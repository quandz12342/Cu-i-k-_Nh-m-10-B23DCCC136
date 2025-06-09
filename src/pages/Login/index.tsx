import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { history } from '@umijs/max';
import React from 'react';

const LoginPage: React.FC = () => {
  const handleLogin = async (values: { username: string; password: string }) => {
    const { username, password } = values;

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
      window.location.href = '/admin/index'; // 👈 dùng window.location để reload initialState
    } else if (username === 'student' && password === 'student') {
      localStorage.setItem('user', JSON.stringify({ role: 'student' }));
      window.location.href = '/student/index'; // 👈 reload lại project sau khi login
    } else {
      message.error('Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <LoginForm
      title="Quản lý mượn đồ"
      subTitle="Đăng nhập để tiếp tục"
      onFinish={handleLogin}
    >
      <ProFormText
        name="username"
        fieldProps={{ prefix: <UserOutlined /> }}
        placeholder="Tài khoản"
        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{ prefix: <LockOutlined /> }}
        placeholder="Mật khẩu"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      />
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <a onClick={() => history.push('/register')}>Chưa có tài khoản? Đăng ký</a>
      </div>
    </LoginForm>
  );
};

export default LoginPage;
