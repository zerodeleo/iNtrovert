import React from 'react';
import { Typography } from '@mui/material';

// Components
import Input from './Input';
import Btn from './Btn';

const FormSignIn = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form
      className="form form-signin pd"
      onSubmit={handleSubmit}
    >
      <Typography
        variant='h4'
        align='center'
        sx={{
          fontFamily: 'Red Hat Display',
          color: '#35463d',
          textTransform: 'uppercase',
        }}>Sign in</Typography>
      <Input
        className="form__input form__input-signin"
        onChange={handleChange}
        value={credentials.username}
        name="username"
        type="text"
        autoComplete="username"
        label="Username"
        sx={{ borderRadius: '12px' }}
      />
      <Input
        className="form__input form__input-signin"
        onChange={handleChange}
        value={credentials.password}
        name="password"
        type="password"
        autoComplete="current-password"
        label="Password"
        style={{
          borderRadius: '12px',
          borderColor: 'transparent',
          fontFamily: 'Red Hat Display',
        }}
      />
      <article style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%' }}>
        <article></article>
        <Btn
          className="form__btn form__btn--signin"
          onSubmit={handleSubmit}
          txt="sign in"
          type="submit"
          variant='contained'
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

export default FormSignIn;
