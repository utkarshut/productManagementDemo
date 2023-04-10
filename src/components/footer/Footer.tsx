import React, { FC } from "react";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer className="footerArea">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="copyright">
              <div className="footerLogo">
                <div className="orgName">Craft India</div>
              </div>
              <p>
                © 2023{" "}
                <a href="al" rel="noopener noreferrer" target="_blank">
                  Craft India
                </a>
                .<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footerWidget">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footerList">
                <ul>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/home-fashion#/">Store location</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/home-fashion#/">Orders tracking</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footerWidget">
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footerList">
                <ul>
                  <li>
                    <a href="/home-fashion#/">Returns</a>
                  </li>
                  <li>
                    <a href="/home-fashion#/">Support Policy</a>
                  </li>
                  <li>
                    <a href="/home-fashion#/">Size guide</a>
                  </li>
                  <li>
                    <a href="/home-fashion#/">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footerWidget">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footerList">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="footerWidget">
              <div className="footer-title">
                <h3>SUBSCRIBE</h3>
              </div>
              <div className="subscribeStyle">
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <div>
                  <div className="subscribeForm">
                    <div className="mc-form">
                      <div>
                        <input
                          id="mc-form-email"
                          className="email"
                          type="email"
                          placeholder="Enter your email address..."
                        />
                      </div>
                      <div className="clear">
                        <button className="button">SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
