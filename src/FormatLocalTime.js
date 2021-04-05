import React from "react";
import "./FormatLocalTime.css";

export default function FormatLocalTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let localTime = props.time;
  let localTimeOffset = localTime.getTimezoneOffset() * 60;
  localTime.setSeconds(
    localTime.getSeconds() + localTimeOffset + props.timezone
  );
  let localDay = days[localTime.getDay()];
  let localHours = localTime.getHours();
  if (localHours < 10) {
    localHours = `0${localHours}`;
  }
  let localMinutes = localTime.getMinutes();
  if (localMinutes < 10) {
    localMinutes = `0${localMinutes}`;
  }
  return (
    <div className="FormatLocalTime">
      {localDay} {localHours}:{localMinutes}
    </div>
  );
}
