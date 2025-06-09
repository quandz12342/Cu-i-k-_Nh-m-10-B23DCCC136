import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    name: 'Borrow Manager',
    theme: 'light',
    locale: false,
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: '@/pages/Login',
      layout: false,
    },
    {
      path: '/register',
      component: '@/pages/Register',
      layout: false,
    },
    {
      path: '/admin',
      name: 'Admin',
      access: 'canAdmin',
      routes: [
        { path: '/admin', redirect: '/admin/index' },
        { path: '/admin/index', name: 'Trang chủ', component: '@/pages/Admin/Index' },
        { path: '/admin/category', name: 'Mục', component: '@/pages/Admin/Category' },
        { path: '/admin/update', name: 'Cập nhật', component: '@/pages/Admin/Update' },
        { path: '/admin/notify', name: 'Thông báo', component: '@/pages/Admin/Notify' },
        { path: '/admin/overdue', name: 'Quá hạn', component: '@/pages/Admin/Overdue' },
        { path: '/admin/history', name: 'Lịch sử', component: '@/pages/Admin/History' },
      ],
    },
    {
      path: '/student',
      name: 'Sinh viên',
      access: 'canStudent',
      routes: [
        { path: '/student', redirect: '/student/index' },
        { path: '/student/index', name: 'Trang chủ', component: '@/pages/Student/Index' },
        { path: '/student/book', name: 'Chi tiết sách', component: '@/pages/Student/BookDetail' },
        { path: '/student/borrowed', name: 'Đã mượn', component: '@/pages/Student/BorrowedList' },
        { path: '/student/notify', name: 'Thông báo', component: '@/pages/Student/Notify' },
      ],
    },
    {
      path: '*',
      component: '@/pages/404',
      layout: false,
    },
  ],
});
