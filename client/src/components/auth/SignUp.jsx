import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';

// Components
import FormSignUp from '../layout/FormSignUp';
import Err from '../error/Err';
import Btn from '../layout/Btn';

const SignUp = ({ signUpDispatch, auth: { uid, authError } }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    passwordCheck: '',
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
    const { username, password, passwordCheck } = credentials;
    if (username === '' || password === '' || passwordCheck === '') {
      return setErr({ ...err, msg: 'Please fill in empty fields' });
    }
    if (password !== passwordCheck) {
      return setErr({ ...err, msg: 'Passwords don\'t match' });
    }
    signUpDispatch(credentials);
  };

  return (
    <section className="form__container form__container-signup">
      <FormSignUp
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      { err.msg ? <Err msg={err.msg} /> : null }
      <Btn
        className="btn__navigate btn__navigate--signin "
        txt="Already a member?"
        txtnextline="sign in"
        sx={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Red Hat Display' }}
        onClick={() => navigate('/signin')}
      />
    </section>

  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUpDispatch: (credentials) => dispatch(signUp(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
