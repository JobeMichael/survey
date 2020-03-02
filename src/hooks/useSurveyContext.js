import { useState, useCallback } from "react";

export const useSurveyContext = () => {
  const [surveyState, setSurvey] = useState({
    completed: false,
    totalQuestion: 0,
    currentStep: 0,
    inProgress: false
  });

  const setSurveyState = useCallback(currentState => {
    setSurvey(currentState);
  }, []);

  return {
    surveyState,
    setSurveyState
  };
};
