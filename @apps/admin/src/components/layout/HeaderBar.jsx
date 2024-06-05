import "./HeaderBar.less";
import AvatarProfile from '@/components/common/profile/AvatarProfile';
import ManageMenu from '@/components/menu/ManageMenu';
import LoginButton from '@/components/button/LoginButton';

const HeaderBar = () => {
  return (
    <div className="headerBar">
      <AvatarProfile />
      <ManageMenu />
      <LoginButton />
    </div>
  )
}

export default HeaderBar;