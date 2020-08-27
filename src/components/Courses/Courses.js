import React from "react";
import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Courses = (props) => {
  const { name, img, instructor, hours, price } = props.course;
  return (
    <div className="courses">
      <div className="courses-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <br />
        <h5>Instructor: {instructor}</h5>
        <p>
          <small className="text-muted">
            <FontAwesomeIcon icon={faClock} /> Total Hours: {hours}
          </small>
        </p>
        <h3>${price}</h3>
        <button className="btn btn-success" onClick={() => props.handleEnrollBtn(props.course)}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Courses;
