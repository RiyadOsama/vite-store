import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-body-tertiary pt-5 pb-3 mt-5 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h5 className="mb-3">About Us</h5>
            <p>
              We provide high-quality products and services to make your life
              easier. Our mission is to deliver value and build trust.
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-dark text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="productList/new"
                  className="text-dark text-decoration-none"
                >
                  Product Form
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="productList"
                  className="text-dark text-decoration-none"
                >
                  Product List
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 ">
            <h5 className="mb-3">Contact</h5>
            <p>Email: support@mywebsite.com</p>
            <p>Phone: +123 456 789</p>

            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-success fs-4"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-danger fs-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark fs-4"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-dark" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} React Products. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
