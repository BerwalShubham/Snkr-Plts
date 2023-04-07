import React from "react";
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

const ProductDetail = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col xxl={6} xl={5} className="text-center text-xl-start">
            <img className="red-jordan" src={redjordan} alt="shoes" />
            <Row className="mt-3">
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  className="similar-shoes"
                  src={blackdc}
                  alt="DC black sheos"
                />
              </Col>
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  className="similar-shoes"
                  src={redjordan2}
                  alt="red Jordan sheos"
                />
              </Col>
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  className="similar-shoes"
                  src={greydc}
                  alt="DC grey sheos"
                />
              </Col>
              <Col className="px-1 px-sm-2" xs={3}>
                <img
                  className="similar-shoes"
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
                <p className="mb-0 color-light-black fs-md">-</p>
                <p className="mb-0 color-light-black fs-md">1</p>
                <p className="mb-0 color-light-black fs-md">+</p>
              </div>
              <button className="bg-color-green rounded-5 fw_medium ff-poppins btn-add-to-art ms-3 fs-md text-white">
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
                <div className="p-1 color-box-container d-flex align-items-center justify-content-center">
                  <div className="red-box"></div>
                </div>
                <div className="p-1 color-box-container d-flex align-items-center justify-content-center">
                  <div className="pastel-box"></div>
                </div>
                <div className="p-1 color-box-container d-flex align-items-center justify-content-center">
                  <div className="black-box"></div>
                </div>
                <div className="p-1 color-box-container d-flex align-items-center justify-content-center">
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
              <img width={22} height={22} src={sharelogo} alt="sharelogo" />
              <img
                width={22}
                height={22}
                className="ms-3"
                src={facebooklogo}
                alt="facebooklogo"
              />
              <img width={22} height={18} src={twitterlogo} alt="twitterlogo" />
              <img
                width={22}
                height={22}
                src={pinterestlogo}
                alt="pinterestlogo"
              />
              <img width={28} height={28} src={googlelogo} alt="googlelogo" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;