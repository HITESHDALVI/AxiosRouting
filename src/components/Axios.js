import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { NavLink } from "react-router-dom";
import { AvatarTag } from "./AvatarTag";


export const Axios = () => {
  const [user, setUser] = useState([]);
  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUser(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main-container">
      {user.map((elem) => (
        <NavLink
          to={{
            pathname: "/ApiPage",
          }}
          state={{ user: elem }}
          key={elem.id}
          className="avatar-div"
        >
          <div className="avatar-card" style={{
            backgroundColor: `hsl(` + Math.random() * 360 + `,  87%, 76%)`, clipPath: " polygon(0 0, 100% 0, 100% 76%, 0% 100%)",
          }}
          >
            <AvatarTag username={user.username} />
          </div>
          <div className="avatar-name">{elem.username}</div>
        </NavLink>
      ))}
    </div>
  );

}

export default Axios;
