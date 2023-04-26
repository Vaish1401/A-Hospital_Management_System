import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useAuth = () => {
  const navigate = useNavigate();

  const checkLoggedIn = () => {
    const loggedIn = window.localStorage.getItem('loggedIn') === "true";
    return loggedIn;
  };

  const redirectToLogin = () => {
    toast.error('Access Denied');
    navigate('/');
  };

  return {
    checkLoggedIn,
    redirectToLogin
  };
};

export default useAuth;
