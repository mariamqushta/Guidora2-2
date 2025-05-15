import React from "react";
import './App.css';
import './authform.css'
import Header from "./header";
import Home from "./home";
import Sec1 from "./section1";
import Sec3 from "./section3";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cultural from "./cultural";
import Beach from "./beach";
import Desert from "./desert";
import Religious from "./religious";
import Shopping from "./shopping";
import Medical from "./medical";
import Saved from "./saved";
import Footer from "./footer";
import Company from "./company";
import AuthForm from "./authform";
import Login from "./login";
import UserProfile from "./user";
import Profile from "./profile";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <BrowserRouter>
        <Header />
        <main className="flex-grow-1"> {/* Push footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/section1" element={<Sec1 />} />
            <Route path="/section3/:id" element={<Sec3 />} />
            <Route path="/authform" element={<AuthForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="company" element={<Company />} />
              <Route path="user" element={<UserProfile />} />
            </Route>
            <Route path="/cultural" element={<Cultural />} />
            <Route path="/beach" element={<Beach />} />
            <Route path="/desert" element={<Desert />} />
            <Route path="/religious" element={<Religious />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/medical" element={<Medical />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
