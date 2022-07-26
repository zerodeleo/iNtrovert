import React from 'react';
import { Typography } from '@mui/material';

// Components
import Input from './Input';
import Btn from './Btn';

const FormSignUp = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form className="form form-signup pd" onSubmit={handleSubmit}>
      <Typography variant='h4' align='center'
        sx={{
          fontFamily: 'Red Hat Display',
          color: '#35463d',
          textTransform: 'uppercase',
        }}> Sign up</Typography>
      <Input
        className="form__input form__input-signup"
        onChange={handleChange}
        value={credentials.username}
        name="username"
        type="text"
        autoComplete="username"
        label="Username"
      />
      <Input
        className="form__input form__input-signup"
        onChange={handleChange}
        value={credentials.password}
        name="password"
        type="password"
        autoComplete="new-password"
        label="Enter password"
      />
      <Input
        className="form__input form__input-signup"
        onChange={handleChange}
        value={credentials.passwordCheck}
        name="passwordCheck"
        type="password"
        autoComplete="new-password"
        label="Repeat password"
      />
      <article style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%' }}>
        <article></article>
        <Btn
          className="form__btn form__btn--signup"
          onSubmit={handleSubmit}
          txt="sign up"
          type="submit"
          variant='contained'
          color='secondary'
          sx={{
            backgroundColor: '#3F273A',
            borderRadius: '12px',
            fontFamily: 'Red Hat Display',
            fontWeight: '500',
            letterSpacing: '2px',
            width: '120px',
          }}
        />
        <article></article>
      </article>
    </form>
  );
};

export default FormSignUp;
