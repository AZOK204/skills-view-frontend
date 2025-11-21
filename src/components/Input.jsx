import React from 'react';


const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  label = '',
  className = '',
  name = '',
  required = false,
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`bg-ebony px-3  py-2.5 border border-ebony rounded-lg focus:outline-none  transition  placeholder:text-chateau  text-sm ${
          error ? 'border-red-500' : ''
        } ${className}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
