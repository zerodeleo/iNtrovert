import React from 'react';
import { connect } from 'react-redux';

// Components
import NavBarSignedIn from './NavBarSignedIn';
import NavBarSignedOut from './NavBarSignedOut';
import Globe from './Globe';

import * as styles from '../../css/styles'

const NavBar = ({ auth }) => {
  return (
    <section className={`NavBar ${styles.NavBar}`}>
      { auth.uid ? <NavBarSignedIn auth={auth} /> : <NavBarSignedOut /> }
    </section>
  )
};

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
}};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

