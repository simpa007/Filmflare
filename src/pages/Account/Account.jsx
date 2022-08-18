import React from "react";
import "./Account.css";
import SavedShows from "../../component/SavedShows/SavedShows";
export default function Account() {
  return (
    <div>
      <div className="account">
        <img
          className="account-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/8723f578-a6af-4b6f-9aae-fff2766a17eb/NG-en-20220718-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="overlay"></div>
        <div className="account-content">
          <h1>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </div>
  );
}
