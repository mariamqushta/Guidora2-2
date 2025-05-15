import{React, useState, useEffect ,useRef,useMemo } from "react";
import Collapse from 'bootstrap/js/dist/collapse';
import { useParams } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { element2 } from './elementdata';
import { useLocation } from "react-router-dom";
import {  FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import './App.css';

const Sec3 = () => {
  // ✅ Always at the top
  const { id } = useParams();
  const element2 = JSON.parse(localStorage.getItem("element2")) || [];
  const item = element2.find(el => el.id === parseInt(id));
  
  // ✅ If item is not found, exit early (but AFTER defining hooks)
 



  useEffect(() => {
    const accordionItems = document.querySelectorAll('.collapse');
    accordionItems.forEach(item => {
      new Collapse(item, { toggle: false }); // prevent auto toggle
    });
  }, []);

  const toggleCollapse = (id) => {
    const el = document.getElementById(id);
    const collapse = Collapse.getInstance(el) || new Collapse(el);
    collapse.toggle();
  };





  const [rating, setRating] = useState(0);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${item.id}`);
    if (storedRating) {
      setRating(parseFloat(storedRating));
    }
  }, [item.id]);

  const handleRatingClick = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${item.id}`, value);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingClick(i)}
          style={{ cursor: "pointer" }}
        >
          {rating >= i ? (
            <FaStar className="text-warning" />
          ) : rating >= i - 0.5 ? (
            <FaRegStarHalfStroke className="text-warning" />
          ) : (
            <FaRegStar className="text-warning" />
          )}
        </span>
      );
    }

    return stars;
  };






  // ✅ Setup hooks
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSlots, setShowSlots] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  
  const dateInputRef = useRef();
  const times = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
  
  
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
const [comments] = useState([
  "التعليق 1: تجربة رائعة وممتعة جداً، أنصح الجميع بها",
  "التعليق 2: الخدمة كانت جيدة ولكن تحتاج بعض التحسينات",
  "التعليق 3: أسعار معقولة وجودة ممتازة",
  "التعليق 4: الموظفون كانوا لطفاء جداً والمكان نظيف",
]);
const [userComments, setUserComments] = useState([]);
const [commentInput, setCommentInput] = useState('');
const commentInputRef = useRef();

// Merge and shuffle comments only when either list changes
const allComments = useMemo(() => {
  const merged = [...comments, ...userComments];
  for (let i = merged.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [merged[i], merged[j]] = [merged[j], merged[i]];
  }
  return merged;
}, [comments, userComments]);

const handleInputChange = (e) => {
  const value = e.target.value;
  setCommentInput(value);

  if (commentInputRef.current) {
    if (value.trim()) {
      const firstChar = value.trim()[0];
      const isArabic = /[\u0600-\u06FF]/.test(firstChar);
      commentInputRef.current.dir = isArabic ? "rtl" : "ltr";
    } else {
      commentInputRef.current.dir = "rtl";
    }
  }
};

const submitComment = () => {
  if (commentInput.trim()) {
    setUserComments(prev => [...prev, commentInput.trim()]);
    setCommentInput('');
    setCurrentCommentIndex(0); // Reset to beginning
  }
};


  





  useEffect(() => {
    if (dateInputRef.current) {
      flatpickr(dateInputRef.current, { dateFormat: "Y-m-d" });
    }
  }, []);

  const showTimeSlots = () => {
    setShowSlots(true);
  };

  const handleSubmitTime = () => {
    alert(`You selected: ${selectedTime}`);
    setShowSlots(false);
  };

  const changeTraveler = (type, change) => {
    const maxTotal = 15;
    if (type === 'adult') {
      const newVal = adults + change;
      if (newVal >= 1 && newVal + childs <= maxTotal) setAdults(newVal);
    } else if (type === 'child') {
      const newVal = childs + change;
      if (newVal >= 0 && newVal + adults <= maxTotal) setChilds(newVal);
    }
  };

 
  if (!item) return <p>Item not found</p>;

  return (
    <div className="container-fluid text-dark"> 
      <div className="sec1 pt-5 mx-auto w-95"> 
        <div class="sec1-title "> 
           <h1 className="mb-3 fs-2 fw-bolder">Golden Circle, Blue Lagoon with Ticket and Kerid Volcanic Crater</h1>
        </div> 

        <div className="d-flex align-items-center flex-wrap fs-5">
          <div className="me-3 d-flex align-items-center">
          <div>{renderStars()}</div>
          <span className="ms-2">Your Rating: {rating}</span>
          </div>
          <span className="mx-2 d-none d-sm-inline">|</span>
          <div className="me-3 d-flex align-items-center">
            <FaRegHeart className="text-danger me-1" /> Recommended by 98%
          </div>
          <span className="mx-2 d-none d-sm-inline">|</span>
          <div className="d-flex align-items-center">
            <FaLocationDot className="text-secondary me-1" /> Reykjavik, Iceland
          </div>
        </div>

        {/* Swiper Section */}
      
         <div className="d-flex flex-column flex-md-row justify-content-between mb-3 mt-3 ">

         <div className="col-12 col-md-2  mb-3 mb-md-0 mt-md-0"> 
                                        <Swiper
                                        onSwiper={setThumbsSwiper}
                                        direction="vertical"
                                        slidesPerView={4}
                                        spaceBetween={10}
                                        className="thumb-swiper "
                                        >
                                        {item.img.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="img-fluid" />
          </SwiperSlide>
        ))}
                                        </Swiper>
                                    </div>



                                <div className="col-12 col-md-7 mx-3">
                                    <Swiper
                                    loop
                                    navigation
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[Navigation, Thumbs]}
                                    className="main-swiper "
                                    >
                                     {item.img.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="img-fluid" />
          </SwiperSlide>
        ))}
                                    </Swiper>
                                </div>


                                 

                        
        




        {/* Date, Travelers, Time Selection */}
        <div className="booking-form shadow-lg col-12 col-md-3"> 
                <div class="price"><span class="fs-3 fw-bolder">From $229.00</span> <small>per person</small></div>
              
                <div className="form-group">
                    <label className="fw-bold mb-1">Select Date:</label>
                     <input ref={dateInputRef} type="date" id="date" name="date"  className="form-control h-25 border-2 border-dark mt-3" />
               </div>

                  <div className="form-group mt-3">
                  <label className="fs-4 fw-bolder fw-bolder">Adults (Age 16-99):</label>
                  <div className="number-input">
                     <button onClick={() => changeTraveler('adult', -1)} className="bg-dark text-white d-flex align-items-center justify-content-center">-</button>
                     <span className="mx-2">{adults}</span>
                     <button onClick={() => changeTraveler('adult', 1)} className="bg-dark text-white d-flex align-items-center justify-content-center">+</button>
                  </div>
                  </div>

                <div class="form-group">
                  <label class="fs-4 fw-bolder">Children (Age 1-15):</label>
                  <div class="number-input">
                <button onClick={() => changeTraveler('child', -1)} className="bg-dark text-white d-flex align-items-center justify-content-center">-</button>
                <span className="mx-2">{childs}</span>
                <button onClick={() => changeTraveler('child', 1)} className="bg-dark text-white d-flex align-items-center justify-content-center">+</button>
                </div>
                </div>

          


                <button type="button" className="btn btn-secondary mt-3 mb-3" onClick={showTimeSlots}>
        Check Availability
      </button>
              
                <div class="notes mt-2">
                  <p>Free cancellation up to 24 hours before experience starts (local time).</p>
                  <p>Reserve now and pay later - secure your spot while staying flexible.</p>
                </div>
              
                <div class="rating">
                  4.9 ★ (4,509 Reviews)
                </div>


          </div>     
          </div>




              
                <div class="mt-5 mb-3 row ms-2"> <span class="fs-4 col-6 col-md-3 "><FaClock className="text-success"/>11h (approx.)</span>
            <span class="fs-4   col-6 col-md-3"> <FaCarAlt className="text-success"/> Pick up offered</span>
            <span class="fs-4 col-6 col-md-3 "><FaMobileScreenButton className="text-success"/> Mobile Ticket</span>
            <span class="fs-4 col-6 col-md-3"><FaLanguage className="text-success"/> English & Arabic</span>
         </div>
        <hr/>





        <div
        className="mb-3 border-0"
        id="time-slots"
        style={{ display: showSlots ? 'block' : 'none', marginTop: '20px' }}
      >
        <label className="fw-bold mb-2">Select Time:</label>
        <div className="d-flex flex-wrap gap-3">
          {times.map((time, index) => (
            <label key={index} className="btn btn-outline-dark">
              <input
                type="radio"
                name="timeSlot"
                value={time}
                checked={selectedTime === time}
                onChange={() => setSelectedTime(time)}
                className="me-2"
              />
              {time}
            </label>
          ))}
        </div>
        <button onClick={handleSubmitTime} className="btn btn-primary mt-2">
          Submit Time
        </button>
      </div>


        
        </div>















      {/* Comments Section */}
      <div className="sec2 mt-5 w-90 mx-auto">
  <h2 className="text-start ms-5 fs-2 mt-3 mb-3">Why travelers like this</h2>
  
  <div className="slider-container container">
    <div className="comments-display">
      <div className="visible-comment">
        <p>{allComments[currentCommentIndex]}</p>
      </div>
      <div className="visible-comment">
        <p>{allComments[currentCommentIndex + 1] || allComments[0]}</p>
      </div>
    </div>

    <button
      className="nav-button left-btn"
      onClick={() =>
        setCurrentCommentIndex((prev) => Math.max(0, prev - 2))
      }
      disabled={currentCommentIndex <= 0}
    >
      &lt;
    </button>

    <button
      className="nav-button right-btn"
      onClick={() =>
        setCurrentCommentIndex((prev) =>
          Math.min(prev + 2, allComments.length - 2)
        )
      }
      disabled={currentCommentIndex >= allComments.length - 2}
    >
      &gt;
    </button>
  </div>

  





        <div id="accordion" className="container mt-4 mx-auto mb-5">
      
        <div className="card">
        <div className="card-header d-flex justify-content-between ">
          <span>Overview</span>
          <button
            className="btn w-25"
            onClick={() => toggleCollapse('collapseOne')}
          >
            <IoIosArrowDown />
          </button>
        </div>
  <div id="collapseOne" className="collapse " data-bs-parent="#accordion">
    <div className="card-body">
      <div className="accordion-content">

        <p>{item.Overview}</p>
          
            </div>
          </div>
        </div>
      </div>
    
      



        
      <div className="card">
      <div className="card-header d-flex justify-content-between ">
          <span>What's included</span>
          <button
            className="btn w-25"
            onClick={() => toggleCollapse('collapseTwo')}
          >
            <IoIosArrowDown />
          </button>
        </div>
        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
       
            <div className="accordion-content" style={{fontsize: "17px"}}>
              <div className="d-flex justify-content-between">
        
                <p>{item.included}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
   
      <div className="card">
      <div className="card-header d-flex justify-content-between ">
          <span>Additional info</span>
          <button
            className="btn w-25"
            onClick={() => toggleCollapse('collapseThree')}
          >
            <IoIosArrowDown />
          </button>
        </div>
        <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
            <div className="accordion-content" style={{fontsize: "17px"}}>
              <div className="add-info d-flex">
              

                  <p>{item.Additional}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





      
<h3 className="fs-3 mb-4 mt-3 ms-3">Share your experience!</h3>
<div className="comment-form container mb-3 pt-2">
    <textarea
      ref={commentInputRef}
      className="rounded shadow w-100"
      placeholder="اكتب تعليقك هنا..."
      rows="5"
      value={commentInput}
      onChange={handleInputChange}
    />
    <button
      onClick={submitComment}
      className="btn btn-secondary text-white w-100 fs-5"
    >
      Submit
    </button>
  </div>

  

</div>
</div>
   
  );
};

export default Sec3;