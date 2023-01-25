import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar bg-body-tertiary'>
        <a className='navbar-brand' href='#'>
          Navbar{" "}
          <span className='badge badge-pill badge-secondary'>
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
