import "./SideBar.less";
import Button from '@/components/common/button/Button';
import { menuItems } from '@/constants/menu';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '@/provider/AuthProvider';
import AvatarProfile from '@/components/common/profile/AvatarProfile';

const SideBar = () => {
  const navigate = useNavigate();
  const { user, login, logout, authService } = useContext(AuthContext);
  const [current, setCurrent] = useState('1');
  const onclickLogin = () => login();
  const onclickLogout = async () => logout();
  const onClickMenu = (e) => {
    setCurrent(e.key);
    const menuItem = menuItems.find(item => item.key === e.key);
    if (menuItem && menuItem.path) navigate(menuItem.path);
  }

  return (
    <div className="sidebar">
      <div>
        <AvatarProfile user={user} />
        <Menu
          onClick={onClickMenu}
          style={{ width: 256 }}
          defaultOpenKeys={['manage-employee', 'manage-member', 'manage-center', 'manage-notice']}
          selectedKeys={[current]}
          mode="inline"
          items={menuItems}
        />
      </div>
      {authService && !authService.isAuthenticated() && <Button isFullWidth color="white" label="Login" align="center" onClick={onclickLogin} />}
      {authService && authService.isAuthenticated() && <Button isFullWidth color="white" label="Logout" align="center" onClick={onclickLogout} />}
    </div>
  )
}

export default SideBar;