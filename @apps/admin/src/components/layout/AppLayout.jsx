import SideBar from '@/components/menu/SideBar';
import './AppLayout.less';
import GuestView from '@/pages/GuestView/GuestView';
import KeycloakService from '@/module/keycloak';

const AppLayout = ({ children }) => {
  const authService = new KeycloakService();

  return (
    <div className="layout">
      <SideBar/>
      {
        authService.isAuthenticated()
          ? <div className="content">{children}</div>
          : <GuestView/>
      }
    </div>
  )
};

export default AppLayout;