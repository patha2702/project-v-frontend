const Footer = () => (
  <footer>
    <img
      className="logo-footer"
      src="/assets/images/voice-message.png"
      alt="voice-message"
    />
    <div className="container-footer">
      <div className="footer-contact">
        <div>
          <img src="/assets/images/icon-location.svg" alt="location" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div>
          <img src="/assets/images/icon-phone.svg" alt="phone" />
          <p>+91 9922898177</p>
        </div>

        <div>
          <img src="/assets/images/icon-email.svg" alt="email" />
          <p>project_v@gmail.com</p>
        </div>
      </div>

      <div className="footer-links-left-col">
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">What We Do</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="footer-links-right-col">
        <ul>
          <li>
            <a href="/">Socials</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <ul className="flex">
          <li className="facebook">
            <a href="/">
              <img src="/assets/images/facebook.png" alt="facebook" className="img" />
            </a>
          </li>
          <li className="twitter">
            <a href="/">
            <img src="/assets/images/twitter.png" alt="twitter" className="img" />
            </a>
          </li>
          <li className="instagram">
            <a href="/">
            <img src="/assets/images/instagram.png" alt="instagram" className="img" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p className="copyright">
      &copy; Copyright 2024 Team Project-V. All rights reserved.
    </p>
  </footer>
);

export default Footer;
