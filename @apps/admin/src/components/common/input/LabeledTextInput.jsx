import React from 'react';
import { Input } from 'antd';

const LabeledTextInput = ({ label, placeholder, onChange, isLoading }) => {
  return (
    <label>
      {label}
      <Input name={label} placeholder={placeholder} onChange={onChange} disabled={isLoading} />
    </label>
  );
}

export default LabeledTextInput;