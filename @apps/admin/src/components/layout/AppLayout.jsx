import './AppLayout.less';
import { useEffect, useState } from 'react';
import HeaderBar from '@/components/layout/HeaderBar';
import GuestView from '@/pages/guest/GuestView';
import KeycloakService from '@/module/keycloak';

const AppLayout = ({ children }) => {
  const [authService, setAuthService] = useState(null);

  useEffect(() => {
    setAuthService(new KeycloakService());
  }, []);

  return (
    <div className="layout">
      <HeaderBar/>
      {
        authService && authService.isAuthenticated()
          ? <div className="content">{children}</div>
          : <GuestView/>
      }
    </div>
  )
};

export default AppLayout;