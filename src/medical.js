import React, { useState, useEffect } from "react";
import { element2 as initialElement2 } from "./elementdata";
import Sec2 from "./section2";

const Medical = () => {
  const [element2, setElement2] = useState(() => {
    const stored = localStorage.getItem("element2");
    return stored ? JSON.parse(stored) : initialElement2;
  });

  // Filter only "beach" type flights
  const Medical1 = element2.filter(item => item.type === "Medical");

  // Optional: force localStorage to store initial data for dev
  useEffect(() => {
    if (!localStorage.getItem("element2")) {
      localStorage.setItem("element2", JSON.stringify(initialElement2));
    }
  }, []);

  // Debug logs
  console.log("All flights:", element2);
  console.log("Beach flights:", Medical1);

  return (
    <div className="main-cards-container w-90 mx-auto mt-3">
      <h1 className=" text-center my-3">Available flight</h1>
      <div className="row d-flex justify-content-between">
        {Medical1.length > 0 ? (
          Medical1.map((item) => (
            <Sec2
              key={item.id}
              img={item.img}
              Overview={item.Overview}
              included={item.included}
              Additional={item.Additional}
              companyname={item.companyname}
              destination={item.destination}
              rate={item.rate}
              saved={item.saved}
              id={item.id}
              // toggleSaved={toggleSaved}
            />
          ))
        ) : (
          <p className="text-center">No Medical flights found.</p>
        )}
      </div>
    </div>
  );
};

export default Medical;