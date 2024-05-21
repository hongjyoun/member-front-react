import './MenuItem.less';

const MenuItem = ({ width = 'auto', color = 'primary', isFullWidth = false, label = "button", icon }) => {
  const style = {
    width: isFullWidth ? '100%' : width,
  };
  const IconComponent = icon;

  return (
    <button className={`menu-item menu-item-${color}`} style={style}>
      <div className="icon">{icon && <IconComponent/>}</div>
      <div className="text">{label}</div>
    </button>
  );
};

export default MenuItem;