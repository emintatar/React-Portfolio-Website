import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Experience = () => {
  return (
    <div className="expContainer">
      <div className="expElements">
        <ol>
          <li>
            <SchoolIcon />
            <h3>High School Graduation 2021</h3>
            <p>Unknown Highschool</p>
          </li>
          <li>
            <SchoolIcon />
            <h3>University Graduation 2026</h3>
            <p>Unknown University</p>
          </li>
          <li>
            <BusinessCenterIcon />
            <h3>Internship 2021</h3>
            <p>Trendyol</p>
          </li>
          <li>
            <QuestionMarkIcon />
            <h3>...... ?</h3>
            <p>..................</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
