import React from 'react';
import '../App.css';

export class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <img
          src='https://sundae.com/wp-content/themes/sundae/assets/img/logo.svg'
          alt='sundae'
        />
        <div className='phone-number'>
          <h3>1-800-214-4426 </h3>
        </div>
      </div>
    );
  }
}

export default NavBar;
