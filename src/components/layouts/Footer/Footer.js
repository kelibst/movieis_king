import React from 'react';
import Icofont from 'react-icofont';
import './Footer.scss';

const Footer = () => (
  <footer className="page-footer font-small mdb-color lighten-3 pt-4">

    <div className="container text-center text-md-left">

      <div className="row">

        <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
            esse
            quasi, veritatis totam voluptas nostrum.
          </p>

        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

          <ul className="list-unstyled">
            <li>
              <p>
                <a href="#!">PROJECTS</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#!">BLOG</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#!">AWARDS</a>
              </p>
            </li>
          </ul>

        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

          <ul className="list-unstyled">
            <li>
              <p>
                <Icofont icon="home" />
                {' '}
                New York, NY 10012, US
              </p>
            </li>
            <li>
              <p>
                <Icofont icon="envelope" />
                {' '}
                info@example.com
              </p>
            </li>
            <li>
              <p>
                <Icofont icon="phone" />
                {' '}
                + 01 234 567 88
              </p>
            </li>
            <li>
              <p>
                <Icofont icon="print" />
                {' '}
                + 01 234 567 89
              </p>
            </li>
          </ul>

        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

          <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

          <a type="button" className="btn-floating btn-fb">
            <Icofont icon="facebook" />
          </a>
          <a type="button" className="btn-floating btn-tw">
            <Icofont icon="twitter" />
          </a>
          <a type="button" className="btn-floating btn-dribbble">
            <Icofont icon="linkedin" />
          </a>

        </div>

      </div>

    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="portfolio-keli.herokuapp.com" className="text-whiteout" target="_blank"> Keli Booster</a>
    </div>

  </footer>
);

export default Footer;
