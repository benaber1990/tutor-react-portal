import React from "react";
import "./Components.css";

const MainThisWeek = ({ title, description, kyesTag }) => {
  return (
    <div style={{ padding: 20 }}>
      <div className="MainThisWeekCard">
        <h2 className="HeaderFont">{title}</h2>
        <p>{description}</p>
        <p>{kyesTag}</p>
        <img
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{
            height: 120,
            width: 200,
          }}
        />
      </div>
    </div>
  );
};

export default MainThisWeek;
