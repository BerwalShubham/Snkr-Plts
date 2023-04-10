import React, { useState } from "react";
import { Container } from "react-bootstrap";

const ExtraInformation = () => {
  const [navtab, setnavtab] = useState("0");
  return (
    <section className="py-5">
      <Container>
        <div>
          <ul className="p-0 d-flex align-items-center gap-md-5 gap-4 ">
            <li
              onClick={() => setnavtab("0")}
              className={
                navtab === "0"
                  ? "active-tab position-relative ff-poppins fs-md pointer"
                  : "fs-md pointer"
              }
            >
              DESCRIPTION
            </li>
            <li
              onClick={() => setnavtab("1")}
              className={
                navtab === "1"
                  ? "active-tab position-relative ff-poppins fs-md ms-sm-2 pointer"
                  : "fs-md ms-sm-2 pointer d-none d-sm-block"
              }
            >
              ADDITIONAL INFORMATION
            </li>
            <li
              onClick={() => setnavtab("2")}
              className={
                navtab === "2"
                  ? "active-tab position-relative ff-poppins fs-md ms-sm-2 pointer"
                  : "fs-md ms-sm-2 pointer"
              }
            >
              REVIEWS (1)
            </li>
          </ul>
          <div className="mt-3 pt-2">
            <p
              className={
                navtab === "0" ? "d-block fs-md ff-poppins mb-0" : "d-none"
              }
            >
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut
              nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
              eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
              vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
              pharetra mi. Cura
            </p>
            <p
              className={
                navtab === "1" ? "d-block fs-md ff-poppins mb-0" : "d-none"
              }
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              temporibus facere explicabo inventore doloremque, itaque repellat
              quia accusantium animi quaerat reprehenderit consequatur, eveniet
              in soluta esse repudiandae illo debitis. Neque. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Facilis temporibus facere
              explicabo inventore doloremque, itaque repellat quia accusantium
              animi quaerat reprehenderit consequatur, eveniet in soluta esse
              repudiandae illo debitis. Neque.
            </p>
            <div className={navtab === "2" ? "d-block" : "d-none"}>
              <p className="mb-1">⭐⭐⭐⭐⭐</p>
              <p className="mb-1">⭐⭐</p>
              <p className="mb-1">⭐⭐⭐⭐⭐</p>
              <p className="mb-1">⭐⭐⭐</p>
            </div>
          </div>
          <div className="mt-5 d-sm-none">
            <p className=" ff-poppins addition-information color-red position-relative fs-md ms-sm-2 pointer">
              ADDITIONAL INFORMATION
            </p>
            <p className="ff-poppins fs-md pt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              temporibus facere explicabo inventore doloremque, itaque repellat
              quia accusantium animi quaerat reprehenderit consequatur, eveniet
              in soluta esse repudiandae illo debitis. Neque. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Facilis temporibus facere
              explicabo inventore doloremque, itaque repellat quia accusantium
              animi quaerat reprehenderit consequatur, eveniet in soluta esse
              repudiandae illo debitis. Neque.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExtraInformation;
