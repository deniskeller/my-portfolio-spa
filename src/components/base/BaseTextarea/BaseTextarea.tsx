import React from 'react';
import styles from './BaseTextarea.module.scss';

interface Props {
  cols?: number;
  rows?: number;
  value: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | boolean;
  onChange(value: string): void;
  onBlur?(value: string): void;
}

const BaseTextarea: React.FC<Props> = ({
  cols,
  rows,
  value,
  name,
  required = false,
  placeholder,
  className,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`${styles.BaseTextarea} ${className}`}>
      <textarea
        rows={rows}
        cols={cols}
        value={value}
        className={`${styles.Textarea} ${
          error && required ? styles.Error : ''
        }`}
        name={name}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
          onBlur!(e.target.name)
        }
      ></textarea>
      <span className={styles.Bar}></span>
      <label className={styles.Label}>{placeholder}</label>
      {error && required ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default BaseTextarea;
