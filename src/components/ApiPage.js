import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { UserData } from "./UserData";
import { Details } from "./Details";
import { AvatarTag } from "./AvatarTag";





const UserStyle = (props) => {
  return (
    <React.Fragment>
      <div className="user-per-details-1">{props.children}</div>
    </React.Fragment>
  )
}

export default function ApiPage(props) {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-name">My DashBoard</h1>
      <div className="main-user-box">
        <div className="user-per-details">
          <Details heading="Profile" />
          <AvatarTag username={user.username} />
          <UserData label="NickName :" det={user.username} />
          <UserData label="Name :" det={user.name} />
          <UserData label="Email :" det={user.email} />
        </div>
        <div className="user-details">
          <UserStyle>
            <Details heading="City" />
            <UserData label="Area :" det={user.address.suite} />
            <UserData label="ZipCode :" det={user.address.zipcode} />
            <UserData label="City :" det={user.address.city} />
          </UserStyle>
          <UserStyle>
            <Details heading="Social" />
            <UserData label="Phone :" det={user.phone} />
            <UserData label="Website :" det={user.website} />
            <UserData label="Company :" det={user.company.name} />
          </UserStyle>
        </div>
      </div>
    </div>
  );
}
