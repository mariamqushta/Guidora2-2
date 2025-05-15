import { React, useState, useEffect } from "react";
import { element2 as initialElement2 } from "./elementdata";
import Sec2 from "./section2";

const Company = () => {
  const [element2, setElement2] = useState(() => {
    const stored = localStorage.getItem("element2");
    return stored ? JSON.parse(stored) : initialElement2;
  });

  const [formData, setFormData] = useState({
    companyname: "",
    destination: "",
    Overview:"",
      included:"",
      Additional:"",
    rate: "",
    images: [""],
    showType: false,
    type: "",
  });

  const [newFlight, setNewFlight] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("element2");
    const storedFlights = storedData ? JSON.parse(storedData) : [];
    setNewFlight(storedFlights);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "showType") {
      setFormData({
        ...formData,
        showType: checked,
        type: checked ? formData.type : "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData({ ...formData, images: updatedImages });
  };

  const addImageField = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedFlight = {
      id: Date.now(),
      companyname: formData.companyname,
      destination: formData.destination,
      Overview:formData.Overview,
      included:formData.included,
      Additional:formData.Additional,
      rate: formData.rate,
      img: formData.images,
      type: formData.showType ? formData.type : null,
      saved: false,
    };
    const updatedFlights = [...element2, addedFlight];
    localStorage.setItem("element2", JSON.stringify(updatedFlights));
    setElement2(updatedFlights); // update state
    setNewFlight(updatedFlights); // update rendered list
    alert("Flight added successfully!");
    setFormData({
      id: Date.now(),
      Overview:"",
      included:"",
      Additional:"",
      companyname: "",
      destination: "",
      rate: "",
      images: [""],
      showType: false,
      type: "",
    });
  };
  

  return (


<>


<div className="container my-5">
      <div className="card shadow-lg rounded-4 p-4 bg-white">
        <div className="text-center">
          <img
            src="/img_avatar1.png"
            alt="Company Logo"
            className="mb-3 rounded-circle"
          />
          <h3 className="text-success">AirWorld Inc.</h3>
          <p className="text-muted">Connecting the world, one flight at a time.</p>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-md-12 d-flex justify-content-around">
            <p><strong>Email:</strong> contact@airworld.com</p>
            <p><strong>Flights Offered:</strong> 256</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-success rounded-pill px-4">Edit Company Info</button>
        </div>


        <div className=" my-5">
      <h2 className="text-center mb-4">Add New Flight</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input type="text" className="form-control" name="companyname" value={formData.companyname} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Destination</label>
          <input type="text" className="form-control" name="destination" value={formData.destination} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Rate</label>
          <input type="number" className="form-control" name="rate" value={formData.rate} onChange={handleChange} min="0" required />
        </div>

        <div className="mb-3">
  <label className="form-label">Overview</label>
  <textarea
    className="form-control"
    name="Overview"
    value={formData.Overview}
    onChange={handleChange}
  />
</div>

<div className="mb-3">
  <label className="form-label">Included</label>
  <textarea
    className="form-control"
    name="included"
    value={formData.included}
    onChange={handleChange}
  />
</div>

<div className="mb-3">
  <label className="form-label">Additional</label>
  <textarea
    className="form-control"
    name="Additional"
    value={formData.Additional}
    onChange={handleChange}
  />
</div>

        <div className="mb-3">
          <label className="form-label">Image URLs</label>
          {formData.images.map((url, index) => (
            <input
              key={index}
              type="text"
              className="form-control mb-2"
              value={url}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder={`Image URL ${index + 1}`}
              required
            />
          ))}
          <button type="button" className="btn btn-secondary btn-sm mt-1" onClick={addImageField}>
            + Add another image
          </button>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="showType" name="showType" checked={formData.showType} onChange={handleChange} />
          <label className="form-check-label" htmlFor="showType">
            Include a flight type?
          </label>
        </div>

        {formData.showType && (
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-select" name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select type</option>
              <option value="cultural">Cultural</option>
              <option value="beach">Beach</option>
              <option value="desert">Desert</option>
              <option value="religious">Religious</option>
              <option value="shopping">Shopping</option>
              <option value="medical">Medical</option>
            </select>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">Add Flight</button>
      </form>
    </div>



      </div>
    





    <hr/>
    <div className='mx-auto text-center'>
    <h2 className='mx-auto'>Added Flight</h2>
    </div>
      </div>
    <div className="main-cards-container w-90 mx-auto">
    <div className="row d-flex justify-content-between">
    {newFlight.map((item, index) => (
  
  <Sec2
  key={item.id}
  id={item.id}  // <-- Pass the id!
  img={item.img}
  companyname={item.companyname}
  destination={item.destination}
  Overview={item.Overview}
  included={item.included}
  Additional={item.Additional}
  rate={item.rate}
  type={item.type}

  />
))}
</div></div>

</>

  );
};

export default Company;
