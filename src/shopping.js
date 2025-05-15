import React, { useState, useEffect } from "react";
import { element2 as initialElement2 } from "./elementdata";
import Sec2 from "./section2";

const Shopping = () => {
  const [element2, setElement2] = useState(() => {
    const stored = localStorage.getItem("element2");
    return stored ? JSON.parse(stored) : initialElement2;
  });

  // Filter only "beach" type flights
  const Shopping1 = element2.filter(item => item.type === "Shopping");

  // Optional: force localStorage to store initial data for dev
  useEffect(() => {
    if (!localStorage.getItem("element2")) {
      localStorage.setItem("element2", JSON.stringify(initialElement2));
    }
  }, []);

  // Debug logs
  console.log("All flights:", element2);
  console.log("Beach flights:", Shopping1);

  return (
    <div className="main-cards-container w-90 mx-auto mt-3">
      <h1 className=" text-center my-3">Available flight</h1>
      <div className="row d-flex justify-content-between">
        {Shopping1.length > 0 ? (
          Shopping1.map((item) => (
            <Sec2
              key={item.id}
              img={item.img}
              companyname={item.companyname}
              destination={item.destination}
              Overview={item.Overview}
              included={item.included}
              Additional={item.Additional}
              rate={item.rate}
              saved={item.saved}
              id={item.id}
              // toggleSaved={toggleSaved}
            />
          ))
        ) : (
          <p className="text-center">No Shopping flights found.</p>
        )}
      </div>
    </div>
  );
};

export default Shopping;