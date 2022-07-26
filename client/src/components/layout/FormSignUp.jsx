import React from 'react';
import { Typography } from '@mui/material';

// Components
import Input from './Input';
import Btn from './Btn';

const FormSignUp = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form className="form form-signup pd" onSubmit={handleSubmit}>
      <Typography variant='h4' align='center'> Sign up</Typography>
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
      <Btn
        className="form__btn form__btn--signup"
        onSubmit={handleSubmit}
        txt="sign up"
        type="submit"
        variant='contained'
        color='secondary'
      />
    </form>
  );
};

export default FormSignUp;
