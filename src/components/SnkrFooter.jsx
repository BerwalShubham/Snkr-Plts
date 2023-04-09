import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/svg/footerLogo.svg";
import fblogo from "../assets/svg/footerFacebookLogo.svg";
import twitterlogo from "../assets/svg/footerTwitterLogo.svg";
import googlelogo from "../assets/svg/footerGoogleLogo.svg";

const SnkrFooter = () => {
  return (
    <section className="pt-5 bg-color-black footer">
      <Container>
        <Row>
          <Col className="text-center text-xl-start" xl={4}>
            <div className="pe-xl-3">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
              <p className="mb-0 ff-poppins fs-xsm text-white opacity-60">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta.
              </p>
              <div className="d-flex align-items-center gap-3 mt-4 justify-content-center justify-content-xl-start">
                <a className="social-sites-logo" href="#">
                  <img width={34} height={34} src={fblogo} alt="facebook" />
                </a>
                <a className="social-sites-logo" href="#">
                  <img width={34} height={34} src={twitterlogo} alt="twitter" />
                </a>
                <a className="social-sites-logo" href="#">
                  <img width={34} height={34} src={googlelogo} alt="google" />
                </a>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <Row>
              <Col md={3} sm={4} xs={6}>
                <ul className="mt-5 pt-4 ps-0">
                  <li className="ff-poppins fw-semibold fs-sm text-white pt-2">
                    CUSTOM LINKS
                  </li>
                  <li className="pt-4">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <ul className="mt-5 pt-4 ps-0">
                  <li className="ff-poppins fw-semibold fs-sm text-white pt-2">
                    PRODUCTS
                  </li>
                  <li className="pt-4">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <ul className="mt-5 pt-4 ps-0">
                  <li className="ff-poppins fw-semibold fs-sm text-white pt-2">
                    OUR COMPANY
                  </li>
                  <li className="pt-4">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <ul className="mt-5 pt-4 ps-0">
                  <li className="ff-poppins fw-semibold fs-sm text-white pt-2">
                    YOUR ACCOUNT
                  </li>
                  <li className="pt-4">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff-poppins fs-sm text-white opacity-70"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <section className="bg-color-black-2 py-3 mt-5">
        <div className="text-center">
          <p className="mb-0 ff-poopins fs-sm text-white opacity-70">
            © Copyright SNKRPLTS 2021.
          </p>
        </div>
      </section>
    </section>
  );
};

export default SnkrFooter;
