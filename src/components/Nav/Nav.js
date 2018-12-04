import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import Logo from '../../images/CGCLogo300X300App.jpg';

const Nav = (props) => (
  <div className="nav">

    <NavLink to="/home">
    <img src={Logo} id="logo" alt="Logo" style={{width: "15%"}} />
      <h2 className="nav-title">Cottagewood Garden Club</h2>
    </NavLink>

    <div className="nav-right">
      
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id && <NavLink className="nav-link" to="/admin">Admin</NavLink>}
        <NavLink className="nav-link" to="/info">Members</NavLink>
        {props.user.id && <LogOutButton className="nav-link" />}

      {/* Always show this link since the about page is not protected */}
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Nav));
