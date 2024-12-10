import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SecondClass } from './SecondClass';

export default class FirstClass extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false, 
    };
  }

 
  toggleNav = () => {
    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  };

  render() {
    const { showNav } = this.state;

    return (
      <>
        <div className="nav">
       
          <div className="navAlign">
          <ul className={`topList ${showNav ? 'topShow' : ''}`}>
            <li>
              {/* <a href="/">Home</a> */}
              <Link on='/'>Home</Link>
              
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
            <FaBars className="bar" onClick={this.toggleNav} />
            <div className="logo">
              <h1>News</h1>
            </div>
          </div>

       
          <ul className={`list `}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

        </div>
<SecondClass/>
        
      </>
    );
  }
}
