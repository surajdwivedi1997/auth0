import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { auth } from "../../services/auth().service";
import './PostAuthenticate.css'
export const PostAuthenticate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profileData, setProfileData] = useState(null); // State to hold profile data
  const handleLogout = () =>{
    localStorage.removeItem("accessToken");
    navigate("/")
  }

  const processHash = useCallback(() => {
    auth.parseHash(
      {
        hash: location.hash,
      },
      function (error, result) {
        if (error) {
          console.log("there is something wrong:");
          console.log(error);
          return;
        }
        if (result) {
          const { accessToken } = result;
          localStorage.setItem("accessToken", accessToken);
          console.log(`the access token is ${accessToken}`);

          if (accessToken) {
            auth.client.userInfo(accessToken, function (error, profile) {
              if (error) {
                console.log("something went wrong in fetching user profile");
                console.log(error);
                return;
              }
              console.log("user Login successful");
              console.log(profile);

              // Set the profile data to state
              setProfileData(profile);
            });
          }
        }
      }
    );
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      console.log("Yes it has");
      processHash();
    }
  }, [location, processHash]);

  return (
    <div>
      {profileData ? (


        <div>
           <button onClick={handleLogout}>Logout</button> {/* Logout button */}
          <h2>User Profile</h2>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Nickname : {profileData.nickname}</p>
          {/* Display other profile data as needed */}
        </div>
      ) : (
    <div class="spinner">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>

      )}
    </div>
  );
};

export default PostAuthenticate;
