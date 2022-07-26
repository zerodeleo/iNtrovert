import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

// Components
import Err from '../error/Err';
import FormSignIn from '../layout/FormSignIn';
import Btn from '../layout/Btn';

// Dispatches
import { signIn } from '../../store/actions/authActions';


function SignIn({ signInDispatch, auth: { authError, uid } }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [err, setErr] = useState({ msg: null });

  useEffect(() => {
    if (authError) {
      setErr({ ...err, msg: authError });
    }
  }, [authError]);

  if (uid) return <Navigate to="/" />;

  const handleChange = (e) => {
    setErr({ msg: null });
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    if (username === '' || password === '') {
      setErr({ ...err, msg: 'Please fill in empty fields' });
      return;
    }
    signInDispatch(credentials);
  };

  return (
    <section className="form__container form__container-signin">
      <FormSignIn
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      { err ? <Err msg={err.msg} /> : null }
      <Btn
        className="btn__navigate btn__navigate--signup"
        txt="Not a member?"
        txtNextLine="sign up"
        sx={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Red Hat Display' }}
        onClick={() => navigate('/signup')}
      />
    </section>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signInDispatch: (credentials) => dispatch(signIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
