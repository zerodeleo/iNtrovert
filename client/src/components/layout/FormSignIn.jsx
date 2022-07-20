import React from 'react';

// Components
import Input from './Input';
import Btn from './Btn';

const FormSignIn = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form className="form form-signin" onSubmit={handleSubmit}>
      <Input
        className="form__input form__input-signin"
        onChange={handleChange}
        type="text"
        name="username"
        value={credentials.username}
        placeholder="Username ..."
      />
      <Input
        className="form__input form__input-signin"
        onChange={handleChange}
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Password ..."
      />
      <Btn
        className="form__btn form__btn--signin"
        onSubmit={handleSubmit}
        txt="sign in"
        type="submit"
      />
    </form>
  );
};

export default FormSignIn;
