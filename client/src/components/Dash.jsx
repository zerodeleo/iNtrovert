import React from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

const Dash = ({ auth }) => {
  if (!auth.uid) return <Navigate to="/signin" />;

  return (
    <section className="Dash">
      iNtrovert
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
