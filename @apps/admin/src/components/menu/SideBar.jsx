import "./SideBar.less";
import Button from '@/components/common/Button';
import { MdOutlineAdd } from 'react-icons/md';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="upSection">
        <div className="title roboto-medium">Cloud storage</div>
        <Button isFullWidth color="primary" label="Create" icon={MdOutlineAdd} />
        <ul>
          <li></li>
          <li>Shared</li>
          <li>Favorite</li>
          <li>shared</li>
          <li>Deleted files</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;