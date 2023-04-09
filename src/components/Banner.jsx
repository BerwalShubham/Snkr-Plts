import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/svg/logo.svg";
import banner from "../assets/png/banner.png";

const Banner = () => {
  return (
    <section className="py-2">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <a href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <a href="#">
            <img className="ps-2 banner" src={banner} alt="" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
