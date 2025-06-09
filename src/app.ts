// src/app.ts

export async function getInitialState() {
  // Lấy user từ localStorage nếu có
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return {
    currentUser: user, // 👈 bắt buộc để access.ts dùng
    name: '@umijs/max',
  };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
