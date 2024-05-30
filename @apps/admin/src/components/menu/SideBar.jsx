import "./SideBar.less";
import Button from '@/components/common/button/Button';
import { MdAdd, MdCloudCircle } from 'react-icons/md';
import KeycloakService from '@/module/keycloak';
import { sideMenus } from '@/constants/menu';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const authService = new KeycloakService();
  const onclickLogin = () => { authService.login(); };
  const onclickLogout = async () => { await authService.logout(); };

  return (
    <div className="sidebar">
      <div className="upSection">
        <div className="title roboto-medium">
          <MdCloudCircle size={28}/>
          <span className="titleText">Cloud storage</span>
        </div>
        <Button isFullWidth color="primary" label="Create" icon={MdAdd} align="center"/>
        <ul>
          { sideMenus.map((menu, index) => {
            return <li key={index}><Button isFullWidth thin color="black" label={menu.name} icon={menu.icon} onClick={() => navigate(menu.path)}/></li>
          }) }
        </ul>
      </div>
      <div className="downSection">
      <div className="greyBox">
          {authService && !authService.isAuthenticated() && <Button isFullWidth color="white" label="Login" align="center" onClick={onclickLogin} />}
          {authService && authService.isAuthenticated() && <Button isFullWidth color="white" label="Logout" align="center" onClick={onclickLogout} />}
        </div>
      </div>
    </div>
  )
}

export default SideBar;