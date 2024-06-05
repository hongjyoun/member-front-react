import './AvatarProfile.less';
import { Avatar, Badge } from 'antd';
import { MdPermIdentity } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '@/provider/AuthProvider';

const AvatarProfile = () => {
  const { user } = useContext(AuthContext);
  const userName = user && user.member ? user.member.fullName : 'Guest';
  const userPermission = user && user.permissionProfile ? user.permissionProfile.nameKr : '';
  return (
    <div className="profile-name">
      <Badge count={1} offset={[-3,3]}>
        <Avatar size={42} icon={<MdPermIdentity />} />
      </Badge>
      <div>
        <div className="name-text">{userName}</div>
        <div className="subtext">{userPermission}</div>
      </div>
    </div>
  )
}

export default AvatarProfile;