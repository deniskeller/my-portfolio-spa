import React, { FocusEvent } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Contacts.module.scss';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseTextarea,
} from '@base/index';
import { createDataForm } from 'services/api';

interface Props {}

const Contacts: React.FC<Props> = () => {
  const { t } = useTranslation('contacts');

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [textDirty, setTextDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState<string>(
    t('contacts.not_empty')
  );
  const [emailError, setEmailError] = React.useState<string>(
    t('contacts.not_empty')
  );
  const [textError, setTextError] = React.useState<string>(
    t('contacts.not_empty')
  );

  const [disabled, setDisabled] = React.useState(true);

  const changeHandlerName = (value: string) => {
    setName(value);
    if (value != '') {
      setNameError('');
    } else {
      setNameError(t('contacts.not_empty'));
    }
  };

  const changeHandlerEmail = (value: string) => {
    setEmail(value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase()) && value != '') {
      setEmailError(t('contacts.incorrect_email'));
    } else if (value == '') {
      setEmailError(t('contacts.not_empty'));
    } else {
      setEmailError('');
    }
  };

  const changeHandlerTextarea = (value: string) => {
    setText(value);
    if (value != '') {
      setTextError('');
    } else {
      setTextError(t('contacts.not_empty'));
    }
  };

  const blurHandler = (name: string) => {
    console.log('name: ', name);
    switch (name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'text':
        setTextDirty(true);
        break;
    }
  };

  React.useEffect(() => {
    if (nameError || emailError || textError) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    // console.log('nameError: ', nameError);
    // console.log('textError: ', textError);
    // console.log('emailError: ', emailError);
  }, [nameError, emailError, textError]);

  const clear = () => {
    setName('');
    setEmail('');
    setText('');
    setNameDirty(false);
    setEmailDirty(false);
    setTextDirty(false);
    setNameError(t('contacts.not_empty'));
    setEmailError(t('contacts.not_empty'));
    setTextError(t('contacts.not_empty'));
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const data = new FormData();

    const data = {
      email: email,
      name: name,
      text: text,
    };
    // data.append('email', email);
    // data.append('name', name);
    // data.append('text', text);

    createDataForm(data);
    clear();
    alert('Заявка успешно отправлена...');
  };

  return (
    <BaseContainer>
      <h1 className={styles.Title}>{t('contacts.question')}</h1>
      <form className={styles.Form}>
        <div className={styles.Form__inputs}>
          <BaseInput
            value={name}
            name="name"
            onChange={changeHandlerName}
            onBlur={blurHandler}
            placeholder={t('contacts.name')}
            type="text"
            required
            error={nameDirty && nameError}
            className={styles.Input}
          />

          <BaseInput
            value={email}
            name="email"
            onChange={changeHandlerEmail}
            onBlur={blurHandler}
            placeholder="Email"
            type="text"
            required
            error={emailDirty && emailError}
            className={styles.Input}
          />
        </div>
        <BaseTextarea
          cols={50}
          rows={4}
          value={text}
          name="text"
          onChange={changeHandlerTextarea}
          onBlur={blurHandler}
          placeholder="Message"
          required
          error={textDirty && textError}
          className={styles.Textarea}
        />

        <div className="form-row-icon">
          <BaseButton
            type="primary"
            disabled={!disabled}
            onClick={submitHandler}
            className={styles.Button}
          >
            {t('contacts.btn_title')}
          </BaseButton>
        </div>
      </form>

      {/* <form action='' method='post'>
        <ul className='inputs'>
          <li>
            <label htmlFor='from'>From</label>
            <input type='text' id='from' name='from' />
          </li>
          <li>
            <label htmlFor='to'>To</label>
            <input type='text' id='to' name='to' />
          </li>
          <li>
            <label htmlFor='date'>Date</label>
            <input type='date' id='date' name='date' />
          </li>
          <li>
            <label htmlFor='time'>Time</label>
            <input type='time' id='time' name='time' />
          </li>
          <li>
            <button>Request</button>
          </li>
        </ul>
      </form> */}

      <h1 className={styles.Title}>
        {t('contacts.contact_me')}&nbsp;
        <a
          href="https://t.me/dkfront"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Telegram}
        >
          Telegram
        </a>
      </h1>
    </BaseContainer>
  );
};

export default Contacts;
