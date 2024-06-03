import "./SideBar.less";
import KeycloakService from '@/module/keycloak';
import Button from '@/components/common/button/Button';
import { MdPermIdentity } from 'react-icons/md';
import { menuItems } from '@/constants/menu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Badge, Menu } from 'antd';
import { useState } from 'react';

const SideBar = () => {
  const navigate = useNavigate();
  const authService = new KeycloakService();
  const onclickLogin = () => { authService.login(); };
  const onclickLogout = async () => { await authService.logout(); };

  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClickMenu = (e) => {
    console.log('menuItems', menuItems);
    setCurrent(e.key);
    const menuItem = menuItems.find(item => item.key === e.key);
    if (menuItem && menuItem.path) navigate(menuItem.path);
  }

  return (
    <div className="sidebar">
      <div className="upSection">
        <div className="title roboto-medium">
          <Badge count={1} offset={[-3,3]}>
            <Avatar size={42} icon={<MdPermIdentity />} />
          </Badge>
        </div>
        <Menu
          theme={theme}
          onClick={onClickMenu}
          style={{ width: 256 }}
          defaultOpenKeys={['manage-employee', 'manage-member', 'manage-center', 'manage-notice']}
          selectedKeys={[current]}
          mode="inline"
          items={menuItems}
        />
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