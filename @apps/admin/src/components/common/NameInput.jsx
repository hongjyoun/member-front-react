import { Input } from 'antd';

const NameInput = ({ placeholder, name, setName }) => {
  return (
    <div>
      <Input placeholder={placeholder}  value={name} onChange={(e) => setName(e)} />
    </div>
  );
}

export default NameInput;