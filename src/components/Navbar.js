import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { Link, useRoute } from "wouter";

const Navbar = () => {

  // Active NavLink with WOUTER
  const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props} className={isActive ? "nav-link select cord-50" : "nav-link"}>
        {props.children}
      </Link>
    );
  };

  return (
    <header>
      <nav className="navbar-component box-shadow-micro" id="navbar_1">
        <Link className="navbar-logo txt-300" to="/" title="Home page name">
          Message<span className="txt-500">LIST</span>
        </Link>
        <div className="navbar-toggle">
          <button type="button" className="btn-toggle">
            <i className="a-menu"></i>
          </button>
        </div>
        <div className="navbar-actions split">
          <ul className="navbar-actions_item jc-end">

            <li>
              <ActiveLink href="/" className="nav-link">
                <i className="a-event_note" /> List
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/new-message" className="nav-link">
                New Message
              </ActiveLink> 
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;