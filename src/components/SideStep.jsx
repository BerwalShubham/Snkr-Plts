import React from "react";
import { Container, Row } from "react-bootstrap";
import nikeairmax from "./mapMethodFile/FooteLocker";

const SideStep = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="800"
      className="py-5 overflow-hidden"
    >
      <Container>
        <h2 className="ff-poppins fw-semibold fs-xl">
          You can buy the Nike Air Max 97 Men's Shoe - White here:
        </h2>
        <Row className="mt-3">
          {nikeairmax.map((value) => {
            return (
              <div className="col-xl-3 col-lg-4 col-sm-6 mt-4">
                <div className="nike-air-max-card">
                  <div>
                    <img className="w-100" src={value.img} alt="footlocker" />
                  </div>
                  <div className="px-3 pt-3 mt-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <p className="mb-0 ff-poppins fs-xsm">{value.price}</p>
                        <p className="mb-0 ff-poppins fs-md fw-semibold ps-2">
                          {value.num}
                        </p>
                      </div>
                      <button className="btn-best-price fs-xxsm">
                        {value.btn}
                      </button>
                    </div>
                    <div className="mt-3">
                      <p className="ff-poppins fs-xsm">{value.size}</p>
                      <div className="text-sm-center ">
                        <button className="size-info-btn ff-poppins fw_medium fs-xsm ms-2 ms-sm-0">
                          {value.size41}
                        </button>
                        <button className="size-info-btn ff-poppins fw_medium fs-xsm ms-2">
                          {value.size42}
                        </button>
                        <button className="size-info-btn ff-poppins fw_medium fs-xsm ms-2 ms-sm-0 ms-md-2">
                          {value.size43}
                        </button>
                        <button className="size-info-btn ff-poppins fw_medium fs-xsm ms-2 ms-md-0 mt-2">
                          {value.size44}
                        </button>
                        <button className="size-info-btn ff-poppins fw_medium fs-xsm ms-2 ms-sm-0 ms-md-2 mt-2">
                          {value.size45}
                        </button>
                        <button className="size-info-btn ff-poppins fw_medium fs-xsm ms-2 mt-2">
                          {value.size46}
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 pb-3">
                      <p className="ff-poppins fs-xsm mb-2">
                        {value.viewthisproduct}
                      </p>
                      <a
                        href="#"
                        className="ff-poppins locker-nl fs-xsm mb-0 fw-semibold color-blue"
                      >
                        {value.lockernl}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default SideStep;
