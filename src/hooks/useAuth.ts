// hooks/useAuth.ts
export const useAuth = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return {
    isLoggedIn: !!user,
    isAdmin: user?.isAdmin === true,
    user,
  };
};
