import React from "react";
import { Link } from "react-router-dom";
import "./SurveyCard.scss";

const SurveyCard = ({ id, title }) => {
  return (
    <Link className="card link" to={`/survey/${id}`}>
      {title}
    </Link>
  );
};

export default SurveyCard;
