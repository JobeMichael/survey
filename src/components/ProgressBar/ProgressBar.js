import React from "react";
import { Progress } from "antd";
import "./ProgressBar.scss";

const ProgressBar = ({ currentStep, totalQuestion, progress }) => {
  return (
    <div className="progressWrapper">
      <span className="progress-info">
        {currentStep - 1} of {totalQuestion} answered
      </span>
      <div className="progress-bar">
        <Progress percent={parseInt(progress)} />
      </div>
    </div>
  );
};

export default ProgressBar;
