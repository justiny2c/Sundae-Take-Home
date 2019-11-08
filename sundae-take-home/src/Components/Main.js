import React, { Component } from 'react';
import '../App.css';

export class Main extends Component {
  render() {
    return (
      <div className='main-page'>
        <div className='main-section'>
          <div className='main-image'>
            <img
              src='https://sundae.com/wp-content/uploads/2019/01/how-step-5@2x.png'
              alt='toilet-paper-money'
            />
          </div>
          <div className='main-text'>
            <div className='text'>
              <div className='text-header'>
                <h2>1</h2>
                <h3>FREE HOME ASSESSMENT</h3>
              </div>
              <p>
                Fill out the form below and we’ll contact you within 24 hours to
                schedule your free, no obligation home assessment.
              </p>
            </div>
            <div className='text'>
              <div className='text-header'>
                <h2>2</h2>
                <h3>GET A CASH OFFER</h3>
              </div>
              <p>
                Sundae provides the highest off-market price for your house
                as-is. We also offer a $10,000 cash advance if you need more
                immediate financial support prior to closing.
              </p>
            </div>
            <div className='text'>
              <div className='text-header'>
                <h2>3</h2>
                <h3>CLOSE AT YOUR PACE</h3>
              </div>
              <p>
                Close as quickly as 10 days. Or take your time and close up to
                60 days after you accept your offer. It’s up to you.
              </p>
            </div>
          </div>
        </div>
        <div className='main-footer'>
          <button>
            <a href='https://sundae.com/get-offer-ublp/'>GET OFFER</a>
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
