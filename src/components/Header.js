import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions";

const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link className="header__title" to="/home">
            <h1>My wasted money</h1>
          </Link>
          <button className="logout-btn" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default connect(null, { startLogout })(Header);
