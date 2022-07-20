import React from 'react';

// Components
import Input from './Input';
import Btn from './Btn';

const FormSignUp = ({ credentials, handleChange, handleSubmit }) => {
  return (
    <form className="form form-signup" onSubmit={handleSubmit}>
      <Input
        className="form__input form__input-signup"
        onChange={handleChange}
        type="text"
        name="username"
        value={credentials.username}
        placeholder="Username ..."
      />
      <Input
        className="form__input form__input-signup"
        onChange={handleChange}
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Password ..."
      />
      <Input
        className="form__input form__input-signup"
        onChange={handleChange}
        type="password"
        name="passwordCheck"
        value={credentials.passwordCheck}
        placeholder="Repeat Password ..."
      />
      <Btn
        className="form__btn form__btn--signup"
        onSubmit={handleSubmit}
        txt="sign up"
        type="submit"
      />
    </form>
  );
};

export default FormSignUp;
