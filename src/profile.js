import React from "react";
import { Outlet } from "react-router-dom";
import Company from "./company";
import UserProfile from "./user";
import Login from "./login";




const Profile=()=>{
    return(
        <div>
      <h1 className=" text-center my-3">Profile Page</h1>
      
      <Outlet />
    </div>
        
    )

}
export default Profile;