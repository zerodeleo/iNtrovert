import React from 'react';
import { Typography } from '@mui/material';

// Components
import Input from './Input';
import Btn from './Btn';

const FormSignIn = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form className="form form-signin pd" onSubmit={handleSubmit}>
      <Typography variant='h4' align='center'> Sign in</Typography>
      <Input
        className="form__input form__input-signin"
        onChange={handleChange}
        value={credentials.username}
        name="username"
        type="text"
        autoComplete="username"
        label="Username"
        required
      />
      <Input
        className="form__input form__input-signin"
        onChange={handleChange}
        value={credentials.password}
        name="password"
        type="password"
        autoComplete="current-password"
        label="Password"
      />
      <Btn
        className="form__btn form__btn--signin"
        onSubmit={handleSubmit}
        txt="sign in"
        type="submit"
        variant='contained'
        color='secondary'
      />
    </form>
  );
};

export default FormSignIn;
