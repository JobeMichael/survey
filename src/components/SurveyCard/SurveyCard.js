import React from "react";
import { Link } from "react-router-dom";
import "./SurveyCard.scss";
import { Card } from "antd";

const SurveyCard = ({ id, title, tagline }) => {
  return (
    <Link to={`/survey/${id}`}>
      <Card
        className="link"
        title={title}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>{tagline}</p>
      </Card>
    </Link>
  );
};

export default SurveyCard;
