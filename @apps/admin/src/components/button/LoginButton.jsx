import Button from '@/components/common/button/Button';
import { useContext } from 'react';
import { AuthContext } from '@/provider/AuthProvider';

const LoginButton = () => {
  const { login, logout, authService } = useContext(AuthContext);
  const onclickLogin = () => login();
  const onclickLogout = async () => logout();

  return <>
    {authService && !authService.isAuthenticated() && <Button isFullWidth color="white" label="Login" align="center" onClick={onclickLogin} />}
    {authService && authService.isAuthenticated() && <Button isFullWidth color="white" label="Logout" align="center" onClick={onclickLogout} />}
  </>
}

export default LoginButton;