import { menuItems } from '@/constants/menu';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageMenu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('1');
  const onClickMenu = (e) => {
    setCurrent(e.key);
    const menuItem = menuItems.find(item => item.key === e.key);
    if (menuItem && menuItem.path) navigate(menuItem.path);
  }

  return (
    <Menu
      onClick={onClickMenu}
      style={{ width: 256 }}
      defaultOpenKeys={['manage-employee', 'manage-member', 'manage-center', 'manage-notice']}
      selectedKeys={[current]}
      mode="inline"
      items={menuItems}
    />
  )
}

export default ManageMenu;