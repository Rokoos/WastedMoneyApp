import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions";

const LoginPage = ({ startLogin }) => {
  return (
    <div className="layout">
      <div className="layout-box">
        <h1 className="layout-box__title">Waste Of Money Tracker</h1>
        <button className="button" onClick={startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default connect(null, { startLogin })(LoginPage);
