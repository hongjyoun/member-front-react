import "./SideBar.less";
import AvatarProfile from '@/components/common/profile/AvatarProfile';
import ManageMenu from '@/components/menu/ManageMenu';
import LoginButton from '@/components/button/LoginButton';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <AvatarProfile />
        <ManageMenu />
      </div>
      <LoginButton />
    </div>
  )
}

export default SideBar;