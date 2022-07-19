import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { editUser, deleteUser, logoutUser } from '../../store/actions/authActions';

// Components
import Input from '../layout/Input';
import Button from '../layout/Button';
import Err from '../error/Err';

const UserSettings = ({ auth, authError, editUserDispatch, deleteUserDispatch, logoutUserDispatch }) => {
  const [ err, setErr ] = useState(null);
  const [ usernameErr, setUsernameErr ] = useState(null);
  const [ passwordErr, setPasswordErr ] = useState(null);
  const [ user, setUser ] = useState({ uid: auth.uid, username: auth.username, password: '', passwordCheck: '' });
  
  useEffect(() => {
    if (authError) {
      setErr({ ...err, msg: authError })
    }
  },[auth]);
  
  if (!auth.uid) return <Navigate to="/signin" />;

  const handleChange = (e) => {
    setErr(null)
    setUsernameErr(null)
    setPasswordErr(null)
    const { name, value } = e.target;
    setUser({ ...user, [name]: value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case 'save-username':
        if (user.username === '') {
          return setUsernameErr({ ...err, msg: "Please fill in empty fields"})
        }
        if (user.username === auth.username) {
          return setUsernameErr({ ...err, msg: "Change username before save"})
        }
        editUserDispatch({...user, username: user.username})
        break;
      case 'save-password':
        if (user.password === '' || user.passwordCheck === ''){
          return setPasswordErr({ ...err, msg: "Please fill in empty fields"})
        }
        if (user.password !== user.passwordCheck) {
          return setPasswordErr({ ...err, msg: "Passwords don't match" })
        }
        editUserDispatch({...user, password: user.password});
      break;  
      case 'logout':
        logoutUserDispatch();
        break;
      case 'delete':
        deleteUserDispatch(auth.uid);
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
      <Button
        className="btn btn__settings btn__settings--save-user"
        txt="Save username"
        name="save-username"
        onClick={handleClick}
      />
      { usernameErr ? <Err msg={usernameErr.msg} /> : null }
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
        { passwordErr ? <Err msg={passwordErr.msg} /> : null }
      <Button
        className="btn btn__settings btn__settings--save-user"
        txt="Save password"
        name="save-password"
        onClick={handleClick}
      />
      { err ? <Err msg={err.msg} /> : null }
      <Button
        className="btn btn__settings btn__settings--logout"
        txt="Log Out"
        name="logout"
        onClick={handleClick}
      />
      <Button
        className="btn__settings--delete"
        txt="Delete Account"
        name="delete"
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
  editUserDispatch: (user) => dispatch(editUser(user)),
  deleteUserDispatch: (uid) => dispatch(deleteUser(uid)),
  logoutUserDispatch: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);