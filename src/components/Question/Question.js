import React from "react";
import { Radio, Typography } from "antd";
import "./Question.scss";

const Question = ({ title, options, onChange, questionId }) => {
  const { Title } = Typography;

  return (
    <>
      <Title className="question-title" level={2}>
        {title}
      </Title>
      <Radio.Group onChange={onChange} size="large">
        {options.map((option, index) => (
          <Radio
            key={index}
            className="radioStyle"
            value={`${questionId}##${option}`}
          >
            {option}
          </Radio>
        ))}
      </Radio.Group>
    </>
  );
};

export default Question;
