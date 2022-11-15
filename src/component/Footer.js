/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer>
    <div className="bg-dark mt-5 ">
      <section className="">
        <footer className="text-center text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
          </div>
          <div className="text-center p-3">© 2020 Copyright</div>
        </footer>
      </section>
    </div>
    </footer>
  );
};

export default Footer;
