export default (initialState: { currentUser?: any }) => {
  console.log('Access received user:', initialState); // kiểm tra ở đây
  const role = initialState?.currentUser?.role;
  return {
    canAdmin: role === 'admin',
    canStudent: role === 'student',
  };
};
