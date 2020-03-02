import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Button, Spin, Layout, Divider } from "antd";

import { useSurveySubmit } from "hooks/useSurveySubmit";
import useFetch from "hooks/useFetch";
import Question from "components/Question/Question";
import "./Survey.scss";

export default function Survey() {
  // const [value, setValue] = useState("");
  // const [questionIndex, setQuestionIndex] = useState(0);
  let { id } = useParams();
  const { data, loading } = useFetch("detail", { id });

  const onNext = () => {
    // var [questionId, selectedAns] = value.split("##");
    // const ans = {
    //   question_id: questionId,
    //   value: selectedAns
    // };
    // userAnswers.current.push(ans);
    // if (totalQuestion !== currentStep - 1) {
    //   setQuestionIndex(prevState => prevState + 1);
    // }
    // setValue("");
  };

  const {
    questionIndex,
    hasSelected,
    // userAnswers,
    setSurveyState,
    handleSubmit,
    handleChange,
    currentStep,
    totalQuestion
  } = useSurveySubmit(onNext);

  useEffect(() => {
    if (!loading) {
      setSurveyState(prevState => ({
        ...prevState,
        totalQuestion: data.survey.questions.length,
        currentStep: 1,
        inProgress: true
      }));
    }
  }, [data, loading, setSurveyState]);

  if (loading || totalQuestion === currentStep - 1) {
    return <Spin tip="Loading..." size="large"></Spin>;
  }

  const {
    title,
    questions: {
      [questionIndex]: { title: question, options, id: questionId }
    }
  } = data.survey;

  const { Title } = Typography;
  const { Content } = Layout;

  return (
    <div className="survey">
      <Divider>
        <Title level={1}>{title}</Title>
      </Divider>

      <Content>
        <form onSubmit={handleSubmit}>
          <Question
            title={question}
            options={options}
            onChange={handleChange}
            questionId={questionId}
          />
          <div className="button-holder">
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="default"
              disabled={hasSelected ? false : true}
            >
              Next
            </Button>
          </div>
        </form>
      </Content>
    </div>
  );
}
