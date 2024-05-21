import "./SideBar.less";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="title roboto-medium">Cloud storage</div>
      <ul>
        <li>Dashboard</li>
        <li>Shared</li>
        <li>Favorite</li>
        <li>shared</li>
        <li>Deleted files</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

export default SideBar;