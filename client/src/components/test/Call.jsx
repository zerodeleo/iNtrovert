import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import apiCall from '../../store/actions/apiActions';

console.log(apiCall);

const Call = ({ apiCallDispatch }) => {
  console.log('inside Call component');
  useEffect(() => {
    apiCallDispatch({ location: 'bla', type: 'park' });
  }, []);

  return (
    <article>
      Call
    </article>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    api: state.api,
  };
};

const mapDispatchToProps = (dispatch) => ({
  apiCallDispatch: ({ location, type }) => dispatch(apiCall.apiCall({ location, type })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Call);
