import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Countdown from 'react-countdown';

// Components
import Input from '../layout/Input';
import Button from '../layout/Button';
import Error from '../error/Error';

// Actions
import { signIn } from '../../store/actions/authActions';

// Styles
import * as styles from '../../css/styles';
import { useEffect } from 'react';

function SignIn({ signInDispatch, authError, auth }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (authError) setError(true)
  },[authError]);

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInDispatch(credentials);
  };

  if (auth.uid) return <Navigate to="/" />;

  return (
    <section className={`SignIn ${styles.SignIn}`}>
      
          <div>
            <br/>
              <h1>Countdown:</h1>
              <h1><Countdown date='2022-07-17T00:00:00' /></h1>
            <br/>
            <form className={styles.form__signin} onSubmit={handleSubmit}>
              <Input
                className={styles.input}
                onChange={handleChange}
                type="text"
                name="username"
                value={credentials.username}
                placeholder="Username ..."
              />
              <Input
                className={styles.input}
                onChange={handleChange}
                type="password"
                name="password"
                value={credentials.password}
                placeholder="Password ..."
              />
              <Button
                className={styles.button}
                onSubmit={handleSubmit}
                txt="sign in"
                type="submit"
              />
            </form>
          </div>
         { error
        ? <h2 className={'c-red'}><br/>Patient is key ... <br/>Du får inloggningsuppgifter<br/>när countdown är klar<br/>HIYAH</h2>
        : null}
    </section>
  );
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signInDispatch: (credentials) => dispatch(signIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
