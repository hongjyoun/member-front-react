import { menuItems } from '@/constants/menu';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageMenu.less';

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
      className='manage-menu'
      // defaultOpenKeys={['manage-employee']}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuItems}
    />
  )
}

export default ManageMenu;