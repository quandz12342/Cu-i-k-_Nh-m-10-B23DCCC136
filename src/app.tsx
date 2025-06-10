import { LogoutOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';

export async function getInitialState() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return {
    currentUser: user,
  };
}

export const layout = () => {
  return {
    title: 'Quản lý thư viện',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    rightRender: () => (
      <Button
        type="link"
        icon={<LogoutOutlined />}
        onClick={() => {
          localStorage.removeItem('user');
          history.push('/login');
        }}
      >
        Đăng xuất
      </Button>
    ),
  };
};
