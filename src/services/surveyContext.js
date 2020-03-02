import React from "react";

const SurveyContext = React.createContext({
  isCompleted: false,
  setIsCompleted: () => {}
});

export default SurveyContext;
