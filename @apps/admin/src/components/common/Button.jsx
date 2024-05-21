import './Button.less';

const Button = ({ width = 'auto', color = 'primary', isFullWidth = false, label = "button", icon, align = 'start', onClick }) => {
  const style = {
    width: isFullWidth ? '100%' : width,
  };
  const IconComponent = icon;

  return (
    <button className={`custom-button custom-button-${color}`} style={style} onClick={onClick}>
      <div className={`button-content ${align}`}>
        {icon && <div className="icon"><IconComponent/></div>}
        <div className="text">{label}</div>
      </div>
    </button>
  );
};

export default Button;