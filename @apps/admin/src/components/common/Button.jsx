import './Button.less';

const Button = ({ width = 'auto', color = 'primary', isFullWidth = false, label = "button", icon }) => {
  const style = {
    width: isFullWidth ? '100%' : width,
  };
  const IconComponent = icon;

  return (
    <button className={`custom-button custom-button-${color}`} style={style}>
      <div className="icon">{icon && <IconComponent/>}</div>
      <div className="text">{label}</div>
    </button>
  );
};

export default Button;