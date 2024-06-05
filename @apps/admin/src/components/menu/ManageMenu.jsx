import { menuItems } from '@/constants/menu';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageMenu.less';
import { AuthContext } from '@/provider/AuthProvider';

const ManageMenu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('1');
  const { authService } = useContext(AuthContext);
  const onClickMenu = (e) => {
    setCurrent(e.key);
    const menuItem = menuItems.find(item => item.key === e.key);
    if (menuItem && menuItem.path) navigate(menuItem.path);
  }

  return (
    authService && authService.isAuthenticated()
     ? <Menu
        onClick={onClickMenu}
        className='manage-menu'
        // defaultOpenKeys={['manage-employee']}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuItems}
        />
    : <div className='manage-menu'></div>
  )
}

export default ManageMenu;