import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Myproducts from "./mapMethodFile/Products";

const RelatedProducts = () => {
  const [currentPage, setcurrentPage] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section id="related-products" className="py-5 overflow-hidden">
      <Container>
        <h2 className="ff-poppins fw-semibold fs-xxl">RELATED PRODUCT</h2>
        <Slider className="mt-4 pt-2" {...settings}>
          {Myproducts.map((val) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="800"
                className="px-2 pb-1"
              >
                <div className="related-products-cards pointer">
                  <img className="w-100" src={val.img} alt="shoes" />
                  <div className="px-2 py-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="ff-poppins fw_medium fs-sm mb-0">
                          {val.head}
                        </p>
                        <div className="d-flex align-items-center pt-3">
                          <p className="mb-0 ff-poppins fw_medium">
                            {val.price1}
                          </p>
                          <p className="mb-0 ff-poppins fw_medium color-red ps-2">
                            {val.price2}
                          </p>
                        </div>
                      </div>
                      <img
                        className="pointer shopping-cart"
                        width={48}
                        height={48}
                        src={val.cart}
                        alt="shopping-cart"
                      />
                    </div>
                    <div className="mt-3 d-flex">
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Slider {...settings}>
          {Myproducts.map((val) => {
            return (
              <div
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                className=" mt-4 px-2"
              >
                <div className="related-products-cards related-products-card-1 pointer">
                  <img className="w-100" src={val.img} alt="shoes" />
                  <div className="px-2 py-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="ff-poppins fw_medium fs-sm mb-0">
                          {val.head}
                        </p>
                        <div className="d-flex align-items-center pt-3">
                          <p className="mb-0 ff-poppins fw_medium">
                            {val.price1}
                          </p>
                          <p className="mb-0 ff-poppins fw_medium color-red ps-2">
                            {val.price2}
                          </p>
                        </div>
                      </div>
                      <img
                        className="pointer shopping-cart"
                        width={48}
                        height={48}
                        src={val.cart}
                        alt="shopping-cart"
                      />
                    </div>
                    <div className="mt-3 d-flex">
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                      <img
                        width={22}
                        height={20}
                        src={val.rating}
                        alt="ratings  "
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <ul className="d-flex align-items-center justify-content-end gap-3 p-0 mt-5 pt-3">
          <li
            onClick={() => setcurrentPage(0)}
            className={
              currentPage === 0
                ? "current-page-box-active d-flex align-items-center justify-content-center pointer"
                : "current-page-box-non-active d-flex align-items-center justify-content-center pointer"
            }
          >
            <p className="mb-0 ff-poppins fw-semibold fs-lg">1</p>
          </li>
          <li
            onClick={() => setcurrentPage(1)}
            className={
              currentPage === 1
                ? "current-page-box-active d-flex align-items-center justify-content-center pointer"
                : "current-page-box-non-active d-flex align-items-center justify-content-center pointer"
            }
          >
            <p className="mb-0 ff-poppins fw-semibold fs-lg">2</p>
          </li>
          <li
            onClick={() => setcurrentPage(2)}
            className={
              currentPage === 2
                ? "current-page-box-active d-flex align-items-center justify-content-center pointer"
                : "current-page-box-non-active d-flex align-items-center justify-content-center pointer"
            }
          >
            <p className="mb-0 ff-poppins fw-semibold fs-lg">3</p>
          </li>
          <button
            onClick={() => setcurrentPage(currentPage + 1)}
            className={
              currentPage === 2
                ? "d-none"
                : "ff-poppins fs-xsm color-light-black px-3 py-2 btn-next d-block"
            }
          >
            Next &#62; &#62;
          </button>
        </ul>
      </Container>
    </section>
  );
};

export default RelatedProducts;
