import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import comparelogo from "../assets/svg/compareLogo.svg";
import sharelogo from "../assets/svg/share.svg";
import facebooklogo from "../assets/svg/facebookLogo.svg";
import twitterlogo from "../assets/svg/twitterLogo.svg";
import pinterestlogo from "../assets/svg/pinterestLogo.svg";
import googlelogo from "../assets/svg/googleLogo.svg";
import wishlistlogo from "../assets/svg/wishlistLogo.svg";
import redjordan from "../assets/png/redJordan.png";
import redjordan2 from "../assets/png/redJordan2.png";
import blackdc from "../assets/png/blackDc.png";
import greydc from "../assets/png/greyDc.png";
import redblack from "../assets/png/redBlackshoes.png";
import star from "../assets/svg/star.svg";
import blackjordan from "../assets/png/blackjordan.jpg";
import taupejordan from "../assets/png/taupejordan.jpg";
import greyjordan from "../assets/png/greyjordan.jpg";

const ProductDetail = () => {
  const [quantity, setquantity] = useState(1);
  const [product, setproduct] = useState("0");

  let add = () => {
    setquantity(quantity + 1);
  };
  let subtract = () => {
    if (quantity === 1) {
      setquantity(1);
    } else {
      setquantity(quantity - 1);
    }
  };
  return (
    <section className="py-5 overflow_hide">
      <Container>
        <Row
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="align-items-center"
        >
          <Col xxl={6} xl={5} className="text-center text-xl-start">
            <img
              className={
                product === "0" ? "d-inline-block red-jordan" : "d-none"
              }
              src={redjordan}
              alt="shoes"
            />
            <img
              className={
                product === "1" ? "d-inline-block red-jordan" : "d-none"
              }
              src={blackdc}
              alt="DC black sheos"
            />
            <img
              className={
                product === "2" ? "d-inline-block red-jordan" : "d-none"
              }
              src={greydc}
              alt="DC grey sheos"
            />
            <img
              className={
                product === "3" ? "d-inline-block red-jordan" : "d-none"
              }
              src={redblack}
              alt="red black sheos"
            />
            <img
              className={
                product === "4" ? "d-inline-block red-jordan" : "d-none"
              }
              src={redjordan}
              alt="shoes"
            />
            <img
              className={
                product === "5" ? "d-inline-block red-jordan" : "d-none"
              }
              src={taupejordan}
              alt="red black sheos"
            />
            <img
              className={
                product === "6" ? "d-inline-block red-jordan" : "d-none"
              }
              src={blackjordan}
              alt="red black sheos"
            />
            <img
              className={
                product === "7" ? "d-inline-block red-jordan" : "d-none"
              }
              src={greyjordan}
              alt="red black sheos"
            />
            <Row className="mt-3">
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  onClick={() => setproduct("1")}
                  className="similar-shoes pointer"
                  src={blackdc}
                  alt="DC black sheos"
                />
              </Col>
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  onClick={() => setproduct("0")}
                  className="similar-shoes pointer"
                  src={redjordan2}
                  alt="red Jordan sheos"
                />
              </Col>
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  onClick={() => setproduct("2")}
                  className="similar-shoes pointer"
                  src={greydc}
                  alt="DC grey sheos"
                />
              </Col>
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  onClick={() => setproduct("3")}
                  className="similar-shoes pointer"
                  src={redblack}
                  alt="red black sheos"
                />
              </Col>
            </Row>
          </Col>
          <Col className="ps-xl-5 mt-5 mt-xl-0" xxl={6} xl={7}>
            <h1 className="ff-poppins fw-semibold fs-xxl">
              PREMIUM MENS SPORTS LATHER KEDS
            </h1>
            <div className="d-flex align-items-center pt-2">
              <img width={19} height={18} src={star} alt="star" />
              <img width={19} height={18} src={star} alt="star" />
              <img width={19} height={18} src={star} alt="star" />
              <img width={19} height={18} src={star} alt="star" />
              <img width={19} height={18} src={star} alt="star" />
              <p className="mb-0 ps-2 ff-poppins fs-md">
                ( 5 Customer Review )
              </p>
            </div>
            <p className="ff-poppins fs-md opacity-60 mt-4">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. In vel dolor ac augue pretium{" "}
            </p>
            <div className="d-flex">
              <p className="mb-0 ff-poppins fw_medium fs-md pt-2">Qty: </p>
              <div className="d-flex align-items-center justify-content-center gap-3 ms-3 quantity-box">
                <button
                  onClick={subtract}
                  className="mb-0 color-light-black fs-md border-0 bg-transparent"
                >
                  -
                </button>
                <p className="mb-0 color-light-black fs-md">{quantity}</p>
                <button
                  onClick={add}
                  className="mb-0 color-light-black fs-md border-0 bg-transparent"
                >
                  +
                </button>
              </div>
              <button className="bg-color-green btns-hover rounded-5 fw_medium ff-poppins btn-add-to-art ms-3 fs-md text-white">
                Add to Cart
              </button>
            </div>
            <div className="selectdiv mt-3">
              <label
                className="mb-0 ff-poppins fw_medium fs-md pt-2"
                for="shoe size"
              >
                Size:
              </label>
              <select
                className="size-box rounded-5 ms-3 ps-3 ff-josefin fs-md pt-1 shoes"
                name="size"
                id="size"
              >
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="extralarge">XL</option>
              </select>
            </div>
            <div className="d-flex mt-3 align-items-center">
              <p className="mb-0 ff-poppins fw_medium fs-md pt-2">Color: </p>
              <div className="d-flex align-items-center ms-3 ps-2 mt-2 gap-2">
                <div
                  onClick={() => setproduct("4")}
                  className="p-1 pointer color-box-container d-flex align-items-center justify-content-center"
                >
                  <div className="red-box"></div>
                </div>
                <div
                  onClick={() => setproduct("5")}
                  className="p-1 pointer color-box-container d-flex align-items-center justify-content-center"
                >
                  <div className="pastel-box"></div>
                </div>
                <div
                  onClick={() => setproduct("6")}
                  className="p-1 pointer color-box-container d-flex align-items-center justify-content-center"
                >
                  <div className="black-box"></div>
                </div>
                <div
                  onClick={() => setproduct("7")}
                  className="p-1 pointer color-box-container d-flex align-items-center justify-content-center"
                >
                  <div className="grey-box"></div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5 mt-3">
              <div className="d-flex align-items-center">
                <img src={comparelogo} alt="compare" />
                <p className="mb-0 ff-poppins fw-light ps-1 fs-xsm">Compare</p>
              </div>
              <div className="d-flex align-items-center">
                <img src={wishlistlogo} alt="compare" />
                <p className="mb-0 ff-poppins fw-light ps-1 fs-xsm">Wishlist</p>
              </div>
            </div>
            <hr className="border-1 opacity-5 mt-4" />
            <div className="d-flex align-items-center gap-4">
              <a className="social-sites-logo" href="#">
                <img width={22} height={22} src={sharelogo} alt="sharelogo" />
              </a>
              <a className="social-sites-logo" href="#">
                <img
                  width={22}
                  height={22}
                  className="ms-3"
                  src={facebooklogo}
                  alt="facebooklogo"
                />
              </a>
              <a className="social-sites-logo" href="#">
                <img
                  width={22}
                  height={18}
                  src={twitterlogo}
                  alt="twitterlogo"
                />
              </a>
              <a className="social-sites-logo" href="#">
                <img
                  width={22}
                  height={22}
                  src={pinterestlogo}
                  alt="pinterestlogo"
                />
              </a>
              <a className="social-sites-logo" href="#">
                <img
                  className="pt-1"
                  width={28}
                  height={28}
                  src={googlelogo}
                  alt="googlelogo"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;
