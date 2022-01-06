import React from 'react';
import styles from './BaseInput.module.scss';

interface Props {
  value: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | boolean;
  onChange(value: string): void;
  onBlur?(value: string): void;
}

const BaseInput: React.FC<Props> = ({
  value,
  type,
  name,
  required = false,
  placeholder,
  className,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`${styles.BaseInput} ${className}`}>
      <input
        value={value}
        type={type}
        className={`${styles.Input} ${error && required ? styles.Error : ''}`}
        name={name}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
          onBlur!(e.target.name)
        }
      />
      <span className={styles.Bar}></span>
      <label className={styles.Label}>{placeholder}</label>
      {error && required ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default BaseInput;
