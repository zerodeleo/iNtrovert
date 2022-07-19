import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { editUser } from '../../store/actions/authActions';

// Components
import Input from '../layout/Input';
import Button from '../layout/Button';
import Err from '../error/Err';

const UserSettings = ({ auth, authError, editUserDispatch }) => {
  const [ err, setErr ] = useState({ msg: null });
  const [ user, setUser ] = useState({ uid: auth.uid, username: auth.username, password: '', passwordCheck: '' });
  
  useEffect(() => {
    if (authError) {
      setErr({ ...err, msg: authError })
    }
  },[authError]);
  
  if (!auth.uid) return <Navigate to="/signin" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case 'save':
        if (user.username === auth.username) return;
        editUserDispatch(user);
        break;
      case 'logout':
        break;
      default:
        console.log('what the hell are you doing????');
        break;
    }
  }

  return (
    <section className="UserSettings">
      <Input
        className="input input--edit-username"
        placeholder={ user.username }
        value={ user.username }
        onChange={handleChange}
        name="username"
      />
      { err ? <Err msg={err.msg} /> : null }
      <Input
        className="input input--edit-password"
        placeholder="enter new password"
        value={ user.password }
        onChange={handleChange}
        name="password"
        type="password"
      />
      <Input
        className="input input--edit-passwordCheck"
        placeholder="confirm new password"
        value={ user.passwordCheck }
        onChange={handleChange}
        name="passwordCheck"
        type="password"
      />
      <Button
        className="btn btn__settings btn__settings--save-user"
        txt="Save"
        name="save"
        onClick={handleClick}
      />
      <Button
        className="btn btn__settings btn__settings--logout"
        txt="Log Out"
        name="logout"
        onClick={handleClick}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
  authError: state.auth.authError,
}};

const mapDispatchToProps = (dispatch) => ({
  editUserDispatch: (user) => dispatch(editUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
