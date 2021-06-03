import React from "react";

const getDate = (dateStr) => {
  let date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'});
};

const DateRange = ({ startDates, endDates }) => {
  return (
    <>
      {startDates.map((s, i) => (
        <span key={i}>
          <span className="d-inline-block">
            {getDate(s)}
          </span>
          <span className="d-inline-block">
            &nbsp;-&nbsp;
          </span>
          <span className="d-inline-block">
            {endDates[i] === "2099-12-31T00:00:00.000Z" ? "Current" : getDate(endDates[i])}
            {(i !== startDates.length - 1) && ","}
            &nbsp;
          </span>
        </span>
      ))}

    </>
  )
};

export default DateRange;
