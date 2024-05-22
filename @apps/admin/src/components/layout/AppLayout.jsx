import { useEffect, useState } from 'react';
import SideBar from '@/components/menu/SideBar';
import './AppLayout.less';
import GuestView from '@/pages/guest/GuestView';
import KeycloakService from '@/module/keycloak';

const AppLayout = ({ children }) => {
  const [authService, setAuthService] = useState(null);

  useEffect(() => {
    setAuthService(new KeycloakService());
  }, []);

  return (
    <div className="layout">
      <SideBar/>
      {
        authService && authService.isAuthenticated()
          ? <div className="content">{children}</div>
          : <GuestView/>
      }
    </div>
  )
};

export default AppLayout;