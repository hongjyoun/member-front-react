import "./SideBar.less";
import Button from '@/components/common/Button';
import { MdAdd, MdCloudCircle, MdDashboard, MdFolderShared, MdOutlineFavorite, MdDelete } from 'react-icons/md';
import KeycloakService from '@/module/keycloak';

const SideBar = () => {
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
          <li><Button isFullWidth color="black" label="Dashboard" icon={MdDashboard} /></li>
          <li><Button isFullWidth color="black" label="shared" icon={MdFolderShared} /></li>
          <li><Button isFullWidth color="black" label="Favorite" icon={MdOutlineFavorite} /></li>
          <li><Button isFullWidth color="black" label="Deleted files" icon={MdDelete} /></li>
        </ul>
      </div>
      <div className="downSection">
        <div className="greyBox">
          {authService && !authService.isAuthenticated() && <Button isFullWidth color="white" label="Login" align="center" onClick={onclickLogin} />}
          {authService && authService.isAuthenticated() && <Button isFullWidth color="white" label="Logout" align="center"onClick={onclickLogout} />}
        </div>
      </div>
    </div>
  )
}

export default SideBar;