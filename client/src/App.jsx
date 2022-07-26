import './css/index.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import Dash from './components/Dash';
import Home from './components/Home';
// import Footer from './components/layout/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UserSettings from './components/settings/UserSettings';
import VenuesList from './components/venues/VenuesList';

// Dispatches
import { signInWithLocalStorage } from './store/actions/authActions';

const App = ({ signInWithLocalStorageDispatch }) => {
  useEffect(() => {
    signInWithLocalStorageDispatch();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/venues" element={<VenuesList />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithLocalStorageDispatch: () => dispatch(signInWithLocalStorage()),
});

export default connect(null, mapDispatchToProps)(App);
