import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Styles
import * as styles from '../../css/styles';

const SignedIn = ({ auth }) => {
  if (!auth.uid) return <Navigate to="/signup" />;

  return( 
  <section className={`SignedIn ${styles.SignedIn}`}>
    Signed in
  </section>);
}

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
}};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
