import "./SideBar.less";
import Button from '@/components/common/Button';
import { MdOutlineAdd, MdCloudCircle, MdDashboard, MdFolderShared, MdOutlineFavorite, MdDelete } from 'react-icons/md';
import MenuItem from '@/components/common/MenuItem';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="upSection">
        <div className="title roboto-medium">
          <MdCloudCircle size={28}/>
          <span className="titleText">Cloud storage</span>
        </div>
        <Button isFullWidth color="primary" label="Create" icon={MdOutlineAdd} align="center"/>
        <ul>
          <li><Button isFullWidth color="black" label="Dashboard" icon={MdDashboard} /></li>
          <li><Button isFullWidth color="black" label="shared" icon={MdFolderShared} /></li>
          <li><Button isFullWidth color="black" label="Favorite" icon={MdOutlineFavorite} /></li>
          <li><Button isFullWidth color="black" label="Deleted files" icon={MdDelete} /></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;