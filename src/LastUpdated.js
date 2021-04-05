import React from "react";
import "./LastUpdated.css";

export default function LastUpdated(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let time = new Date(props.date);
  let date = time.getDate();
  let day = days[time.getDay()];
  let month = months[time.getMonth()];
  let hours = time.getHours();
  let minutes = time.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="LastUpdated">
      Last updated: {month} {date}, {day} at {hours}:{minutes}
    </div>
  );
}
