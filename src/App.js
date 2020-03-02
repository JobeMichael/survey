import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import Survey from "./pages/Survey/Survey";
import Result from "./pages/Result/Result";
import { surveyContext } from "./state/surveyContext";
import { useSurveyContext } from "./hooks/useSurveyContext";

const App = () => {
  const surveyState = useSurveyContext();

  return (
    <div className="App">
      <surveyContext.Provider value={surveyState}>
        <Router>
          <AppLayout>
            <Switch>
              <Route path="/survey/:id">
                <Survey />
              </Route>
              <Route exact path="/result">
                <Result />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </AppLayout>
        </Router>
      </surveyContext.Provider>
    </div>
  );
};

export default App;
