import { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import FaceBookIcon from '../../assets/images/icon-facebook.svg';
import YouTubeIcon from '../../assets/images/icon-youtube.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';
import PinterestIcon from '../../assets/images/icon-pinterest.svg';
import InstagramIcon from '../../assets/images/icon-instagram.svg';

import './Footer.css';
export function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const nextEmail = e.target.value;
    setEmail(nextEmail);

    if (error && emailRegex.test(nextEmail)) {
      setError(false);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailRegex.test(email)) {
      setError(false);
      setEmail('');
    } else {
      setError(true);
    }
  };
  return (
    <footer className="footer">
      <div className="logos">
        <img src ={Logo}
          alt="Company Logo" />
          <div className="social-logos">
            <img src={FaceBookIcon} alt="Facebook Icon" />
            <img src={YouTubeIcon} alt="YouTube Icon" />
            <img src={TwitterIcon} alt="Twitter Icon" />
            <img src={PinterestIcon} alt="Pinterest Icon" />
            <img src={InstagramIcon} alt="Instagram Icon" />
          </div>
      </div>
      <nav className="footer-nav">
        <div>
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
        </div>
        <div>
          <a href="#">Careers</a>
          <a href="#">Community</a>
          <a href="#">Privacy Policy</a>
        </div>
      </nav>
      <div className="right-section">
        <div className="input">
          <form onSubmit={handleSubscribe}>
           <div className="input-container">
             <input
              className={error ? 'input-box error' : 'input-box'}
              type="text"
              placeholder="Updates in your inbox..."
              value={email}
              onChange={handleEmailChange}
            />
            {error && <span className="error-message">Please enter a valid email address.</span>}
           </div>
            <button className="btn-go" type="submit">
              Go
            </button>
          </form>
        </div>
        <div className="copy-right">
        Copyright 2020. All Rights Reserved
      </div>
      </div>
      
    </footer>
  );
}