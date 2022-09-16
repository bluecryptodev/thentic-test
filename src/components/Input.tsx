import React, { ChangeEvent } from 'react';
import classes from 'classnames';

interface IInputProps {
  label: string;
  placeholder?: string;
  inputStyle?: string;
  className?: string;
  name: string;
  value: string;
  multi?: boolean;
  col?: number;
  row?: number;
  onChange: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
}

const Input = (props: IInputProps) => {
  const {
    label,
    placeholder,
    className,
    name,
    value,
    inputStyle,
    multi,
    row,
    onChange,
  } = props;

  return (
    <div className={className}>
      <span className='block text-sm font-medium text-black mb-1'>{label}</span>
      {!multi ? (
        <input
          type='text'
          placeholder={placeholder}
          className={classes(
            'block px-3 py-2',
            'bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-gray-400',
            'focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
            inputStyle,
          )}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className={classes(
            'block px-3 py-2',
            'bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-gray-400',
            'focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
            inputStyle,
          )}
          rows={row}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
