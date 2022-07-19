import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import Button from './layout/Button';
import UserSettings from './settings/UserSettings';

const Dash = ({ auth }) => {
  const navigate = useNavigate();
  if (!auth.uid) return <Navigate to="/signin" />;

  return (
    <section className="Dash">
      Dash
      <Button 
        txt="Settings"
        onClick={() => navigate('/settings')}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
}};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
