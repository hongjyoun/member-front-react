import { useContext } from 'react';
import { AuthContext } from '@/provider/AuthProvider';
import { Button } from 'antd';

const LoginButton = () => {
  const { login, logout, authService } = useContext(AuthContext);
  const onclickLogin = () => login();
  const onclickLogout = async () => logout();

  return <div style={{textAlign: 'end'}}>
    {authService && !authService.isAuthenticated() && <Button small onClick={onclickLogin}>Login</Button>}
    {authService && authService.isAuthenticated() && <Button onClick={onclickLogout}>Logout</Button>}
  </div>
}

export default LoginButton;