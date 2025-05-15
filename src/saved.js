import { React, useState, useEffect } from "react";
import { element2 as initialElement2 } from "./elementdata";
import Sec2 from "./section2";

const Saved = () => {
  const [element2, setElement2] = useState(() => {
    const savedData = localStorage.getItem("element2");
    return savedData ? JSON.parse(savedData) : initialElement2;
  });

  const saved = element2.filter(item => item.saved === true);

  useEffect(() => {
    localStorage.setItem("element2", JSON.stringify(element2));
  }, [element2]);

  const toggleSaved = (id) => {
    setElement2((prevElement2) =>
      prevElement2.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  return (
    <>
      {saved.length !== 0 ? (
        <div className="main-cards-container w-90 mx-auto mt-3">
          <div className="row d-flex justify-content-between">
            {saved.map((item) => (
              <Sec2
                key={item.id}
                img={item.img}
                companyname={item.companyname}
                destination={item.destination}
                rate={item.rate}
                saved={item.saved}
                toggleSaved={toggleSaved}
                id={item.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">No saved data found</p>
      )}
    </>
  );
};

export default Saved;
