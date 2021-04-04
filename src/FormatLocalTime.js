import React from "react";

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
  let localTime = props.date;
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
    <h4 className="FormatLocalTime text-center">
      {localDay} {localHours}:{localMinutes}
    </h4>
  );
}
