import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const ResultCard = () => {
  return (
    <Result
      status="success"
      title="You have successfully completed the survey!"
      subTitle="Thanks for answering the survey!"
      extra={[
        <Link to="/" key="link">
          <Button type="primary" shape="round" size="default">
            Back to survey
          </Button>
        </Link>
      ]}
    />
  );
};

export default ResultCard;
