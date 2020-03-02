import { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { surveyContext } from "state/surveyContext";
import * as api from "services/api";
import { getApiUrl } from "helpers/getApiUrl";

export const useSurveySubmit = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [value, setValue] = useState("");
  const [hasSelected, setHasSelected] = useState(false);
  const userAnswers = useRef([]);
  const {
    surveyState: { totalQuestion, currentStep },
    setSurveyState
  } = useContext(surveyContext);
  let history = useHistory();

  const handleChange = e => {
    setValue(prevState => e.target.value);
    setHasSelected(true);
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      setHasSelected(false);
      setSurveyState(prevState => ({
        ...prevState,
        currentStep: prevState.currentStep + 1
      }));

      storeUserAnswers();

      if (totalQuestion === currentStep) {
        postData();
        return;
      }
      setQuestionIndex(prevState => prevState + 1);
      setValue("");
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

  const postData = () => {
    (async () => {
      const completion = { completion: userAnswers.current };
      await api
        .post(getApiUrl("submit"), completion)
        .then(() => history.push("/result"));
    })();

    setSurveyState(prevState => ({
      ...prevState,
      completed: true,
      inProgress: false
    }));
  };

  return {
    questionIndex,
    handleChange,
    hasSelected,
    totalQuestion,
    setSurveyState,
    handleSubmit,
    currentStep
  };
};
