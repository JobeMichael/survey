import { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { surveyContext } from "state/surveyContext";
import { postData } from "services/api";
import { getApiUrl } from "helpers/getApiUrl";

export const useSurveySubmit = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [value, setValue] = useState("");
  const userAnswers = useRef([]);
  const {
    surveyState: { totalQuestion, currentStep },
    setSurveyState
  } = useContext(surveyContext);
  let history = useHistory();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      // update survey state data.
      setSurveyState(prevState => ({
        ...prevState,
        currentStep: prevState.currentStep + 1
      }));

      // store user selected answers in array (useRef)
      storeUserAnswers();

      // post data if user answered all questions.
      if (totalQuestion === currentStep) {
        postSurveyData();
        return;
      }
      // question index increment to render next question
      setQuestionIndex(prevState => prevState + 1);

      // clear current answer
      setValue("");
    }
  };

  const postSurveyData = async () => {
    const completion = { completion: userAnswers.current };
    try {
      const result = await postData(getApiUrl("submit"), completion);

      if (result.status === "ok") {
        // Update the state after submit
        setSurveyState(prevState => ({
          ...prevState,
          completed: true,
          inProgress: false
        }));
        history.push("/result");
      }
    } catch (err) {
      console.log(err);
      history.push("/home");
    }
  };

  const storeUserAnswers = () => {
    var [questionId, selectedAns] = value.split("##");
    const ans = {
      question_id: questionId,
      value: selectedAns
    };
    userAnswers.current.push(ans);
  };

  return {
    questionIndex,
    handleChange,
    setSurveyState,
    handleSubmit,
    value
  };
};
