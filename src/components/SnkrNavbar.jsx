import React, { useState } from "react";
import { Container } from "react-bootstrap";

const SnkrNavbar = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <section className="navbar-shadow-border py-2">
      <Container>
        <div className="d-flex align-items-center justify-content-end gap-4">
          <ul
            className={
              nav
                ? "nav-hidden d-flex align-items-center justify-content-lg-end gap-4 py-2 mb-0"
                : "nav-open d-lg-none p-0"
            }
          >
            <li className="mt-3">
              <a
                onClick={() => setnav(true)}
                className="text-black ff-robot fs-sm"
                href="#related-products"
              >
                SALE
              </a>
            </li>
            <li className="mt-3">
              <a
                onClick={() => setnav(true)}
                className="text-black ff-robot fs-sm"
                href="#related-products"
              >
                SNEAKER VAN DE DAG
              </a>
            </li>
            <li className="mt-3">
              <a
                onClick={() => setnav(true)}
                className="text-black ff-robot fs-sm"
                href="#related-products"
              >
                SNEAKER FORUM
              </a>
            </li>
            <li className="mt-3">
              <a
                onClick={() => setnav(true)}
                className="text-black ff-robot fs-sm"
                href="#related-products"
              >
                BLOG
              </a>
            </li>
          </ul>
          <ul className="d-flex align-items-center justify-content-lg-end gap-4 py-2 mb-0">
            <li>
              <a className="text-black ff-robot fs-sm" href="#">
                HOME
              </a>
            </li>
            <li className="d-none d-sm-block">
              <a className="text-black ff-robot fs-sm" href="#">
                SNEAKERS KOPEN
              </a>
            </li>
            <li className="">
              <a className="text-black ff-robot fs-sm" href="#">
                INTERVIEWS
              </a>
            </li>
            <li className="d-none d-lg-block">
              <a className="text-black ff-robot fs-sm" href="#">
                SALE
              </a>
            </li>
            <li className="d-none d-lg-block">
              <a className="text-black ff-robot fs-sm" href="#">
                SNEAKER VAN DE DAG
              </a>
            </li>
            <li className="d-none d-lg-block">
              <a className="text-black ff-robot fs-sm" href="#">
                SNEAKER FORUM
              </a>
            </li>
            <li className="d-none d-lg-block">
              <a className="text-black ff-robot fs-sm" href="#">
                BLOG
              </a>
            </li>
          </ul>
          <div className="text-end d-lg-none">
            <button
              className={nav === true ? "hamburger" : "hamburger-2"}
              onClick={() => setnav(!nav)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SnkrNavbar;
