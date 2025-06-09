export default (initialState: { currentUser?: any }) => {
  const role = initialState?.currentUser?.role;
  return {
    canAdmin: role === 'admin',
    canStudent: role === 'student',
  };
};