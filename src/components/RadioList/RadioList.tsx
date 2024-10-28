import React from 'react';

import './styles.scss';

export interface RadioButton {
  label: string
  value: string | number
}

export interface Props {
  id?: string
  options: RadioButton[]
  value: string | number
  orientation?: 'vertical' | 'horizontal'
  onChange: (_value: string | number) => void
}

const RadioList: React.FC<Props> = (props) => {
  const {
    id = Math.random().toString(36).slice(2),
    options = [],
    value = '',
    orientation = 'vertical',
    onChange = () => {}
  } = props;

  const isChecked = (radioValue: string | number) => {
    if (value === radioValue) {
      return true;
    }

    return false;
  };

  return (
    <div id={id} className={`radio-list radio-list--${orientation}`}>
      {
        options.map((radioButton: RadioButton, index: number) => (
          <label
            key={index}
            className="radio-list__item"
            onClick={() => {onChange(radioButton.value)}}
          >
            <div className='radio-list__item__circle'>
              <div className={`radio-list__item__circle__inner radio-list__item__circle__inner--${isChecked(radioButton.value) ? 'checked' : 'unchecked'}`}/>
            </div>
            <p className="radio-list__item__label">{radioButton.label}</p>
          </label>
        ))
      }
    </div>
  );
}

export default RadioList;
