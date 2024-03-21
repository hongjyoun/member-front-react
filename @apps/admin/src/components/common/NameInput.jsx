import { Input } from 'antd';

const NameInput = ({ isLoading, placeholder, name, setName }) => {
  const handleChange = (e) => setName(e.target.value);
  return (
    <div>
      <Input placeholder={placeholder} disabled={isLoading === true}  value={name} onChange={handleChange} />
    </div>
  );
}

export default NameInput;