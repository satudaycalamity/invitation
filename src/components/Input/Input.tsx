import React from 'react';

import './styles.scss';

interface Props {
  type: 'text' | 'number' | 'email' | 'password' | 'textarea' | 'date' | 'time'
  id?: string
  title?: string
  value: string | number
  onChange: (_value: string | number, _id: string) => void
  disabled?: boolean
  hasError?: boolean
}

const Input: React.FC<Props> = (props) => {
  const {
    type = 'text',
    id = '',
    title,
    value,
    onChange = () => {},
    disabled = false,
    hasError = false
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value, id);
  };

  const typeInputs = {
    text: (
      <input
        id={id}
        type="text"
        onChange={handleChange}
        disabled={disabled}
        value={value}
        className='input__input__html'
      />
    ),
    number: (<input
      id={id}
      type="number"
      onChange={handleChange}
      disabled={disabled}
      value={value}
      className='input__input__html'
    />),
    email: (<></>),
    password: (<></>),
    textarea: (<></>),
    date: (<></>),
    time: (<></>)
  };

    return (
        <div className={`input input--${type} ${hasError ? 'input--error' : ''}`}>
          <div className='input__label'>
            {title}
          </div>
          <div className='input__input'>
            {typeInputs[type]}
          </div>
        </div>
    );
}

export default Input;
