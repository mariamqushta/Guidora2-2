import {React,useState,useEffect} from "react";
import Lottie from "lottie-react";
import animationData from './assets/Animation - 1745012241485 (1).json';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { element2 as initialElement2 } from "./elementdata";
import Sec1 from "./section1";
import Sec2 from "./section2";
import './App.css';
import Sec3 from "./section3";


const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Cultural & Historical Tourism',
      'Beach & Coastal Tourism',
      'Desert & Safari Tourism',
      'Religious Tourism',
      'Entertainment & Shopping Tourism',
      'Medical & Wellness Tourism',
    ],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 100,
  });

  const element = [
    {
      img: "/imgPharoh.jpg",
      h6: "Cultural & Historical Tourism",
      p: "Must-see sites: The Pyramids of Giza, Sphinx, Karnak Temple, Luxor Temple,  Egyptian Museum, and Saqqara.",
      link:"/cultural"
    },
   
    {
      img: "/download.jpeg",
      h6: "Beach & Coastal Tourism",
      p: "Top destinations: Sharm El-Sheikh, Hurghada, Dahab, Marsa Alam, and Ain Sokhna.",
      link:"/beach"
    },
    {
      img: "/Safari in the desert 🐪.jpeg",
      h6: "Desert & Safari Tourism",
      p: "Go camping, sandboarding, or visit beautiful oases like Siwa, Bahariya, and Dakhla.",
      link:"/desert"
    },{
        img: "/download (1).jpeg",
        h6: "Religious Tourism",
        p: "Al-Azhar Mosque, Mosque of Amr Ibn Al-As,Hanging Church, Monasteries, the Holy Family route",
        link:"/religious"
      },
     
      {
        img: "/Khan el-Khalili.jpeg",
        h6: "Entertainment & Shopping Tourism",
        p: "Modern lifestyle experiences: malls, restaurants, cinemas, amusement parks.",
        link:"/shopping"
      },
      {
        img: "/The beauty of Egyptian nature 🇪🇬 📍Wadi Elweshwash Nuweiba Egypt Sinai.jpeg",
        h6: "Medical & Wellness Tourism",
        p: "Famous locations: Siwa Oasis, Safaga,Hot springs, healing sands, Moses Springs, and Pharaoh’s Bath.",
        link:"/medical"
      },
  ];

  const [element2, setElement2] = useState(() => {
    const savedData = localStorage.getItem("element2");
    return savedData ? JSON.parse(savedData) : initialElement2;
  });

  // Filter saved items based on the element2 state
  const saved = element2.filter(item => item.saved === true);

  // Update localStorage whenever element2 changes
  useEffect(() => {
    localStorage.setItem("element2", JSON.stringify(element2));
  }, [element2]); // Runs when element2 changes

  // Handle toggle of 'saved' status
  const toggleSaved = (id) => {
    setElement2((prevElement2) =>
      prevElement2.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };


  return (
    <div className="container-fluid w-100 text-light p-0 ">
      <div className="App container-fluid  p-5 px-5 w-100 pb-0 mb-0">
        <section id="home-section" className="mb-0 container-fluid w-100">
          <div className="row justify-content-center mb-0">
            <div className="col-sm-7 mt-5">
              <div className="h41 mt-4">
                <h4 className="p-2 ">Welcome to Egypt!</h4>
              </div>
              <div>
                <h1 className="">
                  What kind of adventure are you here for?
                  <p>{text}<Cursor /></p>
                </h1>
              </div>
            </div>
            <div className="col-sm-5">
              <Lottie animationData={animationData} />
            </div>
          </div>
        </section>
      </div>


      <div className="main-cards mt-5">
        <div className="main-cards-container w-90 mx-auto">
          <div className="row d-flex justify-content-between">
            {element.map((item, index) => (
              <Sec1 key={index} img={item.img} h6={item.h6} p={item.p} link={item.link}/>
            ))}
          </div>
        </div>
      </div>

  <div className="divsec2"></div>
      <div className="main-cards mt-5">
        <div className="main-cards-container w-90 mx-auto">
          <div className="row d-flex justify-content-between">
            {element2.map((item, index) => (
               <Sec2
               key={item.id}
               img={item.img}
               companyname={item.companyname} 
               Overview={item.Overview}
               included={item.included}
               Additional={item.Additional}
               destination={item.destination}
               rate={item.rate}
               saved={item.saved}
               toggleSaved={toggleSaved} // Passing toggleSaved function to Sec2
               id={item.id} // Pass item id to Sec2
             />
            ))}
          </div>
        </div>
      </div>




<div>


</div> 






    </div>
  );
};

export default Home;
