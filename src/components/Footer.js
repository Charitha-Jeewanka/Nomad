import React from "react";
import "./Footer.css";
// import { links } from "../data/RoutingData";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                nam iusto optio in cupiditate repellat ipsa temporibus odit
                atque aspernatur!
              </p>
            </div>
            <div class="footer-col">
              <h4>Contact Us</h4>
              <p>
                Deleted because errors pop up. Figure out a way to interact
                google mail
              </p>
            </div>
            <div class="footer-col">
              <h4>Have a Question?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                mollitia id asperiores voluptatum fuga quos officiis similique
                animi repellendus nihil?
              </p>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="https://www.google.com/">
                  <FaGoogle />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
