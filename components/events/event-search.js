import { useRef } from "react";

import Button from "../ui/button";
import classes from "./event-search.module.css";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">jan</option>
            <option value="2">feb</option>
            <option value="3">mar</option>
            <option value="4">apr</option>
            <option value="5">may</option>
            <option value="6">jun</option>
            <option value="7">jul</option>
            <option value="8">aug</option>
            <option value="9">sep</option>
            <option value="10">oct</option>
            <option value="11">nov</option>
            <option value="12">dec</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
}

export default EventSearch;
