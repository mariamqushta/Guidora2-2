import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { FaArrowCircleRight } from "react-icons/fa";
import './App.css';
import { HiAdjustments } from "react-icons/hi";

const Sec1 = ({ img, h6, p, link }) => {
  return (
    <div className="col-12 col-md-4 ">
      <div className="card card-styles mx-auto border-0 bg-transparent">
        <div className="card-img-top1 ">
          <img
            className="card-img-top h-100 img-fluid rounded rounded-5"
            src={img}
            alt="Card"
          />
        </div>
        {/* <div className="bookmark position-absolute text-center rounded-circle d-inline-flex align-items-center justify-content-center end-0 mb-3 mx-3">
          <CiBookmark />
        </div> */}
        <div className="card-body bg-transparent">
          <h6 className="card-title lead fs-3">{h6}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text mb-0 fs-5 fw-light">{p}</p>
          </div>
          <Link to={link} className="btn btn-main fs-5 mt-3">
            More <FaArrowCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
