import React, { useState, useEffect } from "react";
import './App.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Sec2 = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(0);

  const [isSaved, setIsSaved] = useState(false);

  const handleToggle = () => {
    props.toggleSaved(props.id); // Call parent function
    setIsSaved(!isSaved);        // Toggle local state
  };

  const images = Array.isArray(props.img) ? props.img : [props.img];

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${props.id}`);
    if (savedRating) {
      setRating(parseFloat(savedRating));
    }
  }, [props.id]);

  const handleRate = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${props.id}`, value);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRate(i)}
          style={{ cursor: 'pointer' }}
        >
          {i <= rating ? (
            <FaStar className="text-warning me-1" />
          ) : (
            <FaRegStar className="text-warning me-1" />
          )}
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="col-12 col-md-4 mt-3 pb-5">
      <div className="card sec2-card rounded rounded-4 border-0 mx-auto">
        <div className="card-img-top1">
          <Swiper
            loop
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="main-swiper card-img h-100 w-100 sec2img"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className="img-fluid rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="bookmark bi bi-heart-fill position-absolute text-center rounded-circle d-inline-flex align-items-center justify-content-center end-0 mb-3 mx-3 mt-2"
         
      style={{ color: isSaved ? 'white' : 'black', cursor: 'pointer' }}
      onClick={handleToggle}
        >
          <CiBookmark />
        </div>

        <div className="d-flex justify-content-between">
          <div className="pb-3">
            <p className="card-text mb-0 fs-2 h5 lead mt-2 ms-4 text-secondary">{props.companyname}</p>
            <p className="card-text mb-0 fs-2 h5 lead mt-2 ms-4 text-secondary">{props.destination}</p>
            <p className="card-text mb-0 fs-2 h5 lead mt-2 ms-4 text-secondary fw-bold">
              Your Rating: {renderStars()}
            </p>
          </div>

          <div className="w-50 ps-5 pt-5 h-25">
            <Link
              to={`/section3/${props.id}`}
              className="btn btn-main fs-5 mt-5 ms-4 border border-secondary"
            >
              More <FaArrowCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
