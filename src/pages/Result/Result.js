import React from "react";
import { Route, Redirect } from "react-router-dom";
import ResultCard from "components/ResultCard/ResultCard";
import { surveyContext } from "state/surveyContext";

const Result = props => {
  const {
    surveyState: { completed }
  } = React.useContext(surveyContext);

  return (
    <Route render={() => (completed ? <ResultCard /> : <Redirect to="/" />)} />
  );
};

export default Result;
