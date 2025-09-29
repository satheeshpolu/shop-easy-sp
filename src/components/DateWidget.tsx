import React from "react";

const DateWidget: React.FC = () => {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace", color: "#rgb(4 89 81)" }}>
      <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{day} {today.toString().split(' ')[0]}</div> 
      <div style={{ fontSize: "2rem" }}>
        {month} <span style={{ margin: "0 0.25rem" }}>|</span> {year}
      </div>
    </div>
  );
};

export default DateWidget;
