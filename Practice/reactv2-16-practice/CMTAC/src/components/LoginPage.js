import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startSignup } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">CMTAC</h1>
      <p>Welcome!</p>
      <button className="button" onClick={startSignup}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  // startLogin: () => dispatch(startLogin())
  startSignup: () => dispatch(startSignup('me@hello.com', 123))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
