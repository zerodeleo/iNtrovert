import './css/index.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Dash from './components/Dash';
import Footer from './components/layout/Footer';
import SignIn from './components/auth/SignIn';
import SignedIn from './components/layout/SignedIn';

// Styles
import * as styles from './css/styles';

// Actions
import { logIn } from './store/actions/authActions';

const App = ({ logInDispatch }) => {

  useEffect(() => {
    logInDispatch()
  }, [])

  return (
    <Router>
      <div className={`App ${styles.App}`}>
        <br/>
      <h2 className={'shadow fade-in fs-3'}>Hej Charlie</h2>
        <Routes>
          <Route exact path="/charlie" element={<SignedIn />} />
          <Route exact path="/" element={<Dash />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
  logInDispatch: () => dispatch(logIn()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
