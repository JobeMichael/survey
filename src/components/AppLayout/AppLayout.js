import React, { useState, useEffect } from "react";
import { Typography, Layout } from "antd";
import { surveyContext } from "state/surveyContext";
import ProgressBar from "components/ProgressBar/ProgressBar";
import "./AppLayout.scss";

const AppLayout = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const {
    surveyState: { totalQuestion, currentStep, inProgress }
  } = React.useContext(surveyContext);

  const { Title } = Typography;
  const { Footer, Content, Header } = Layout;

  useEffect(() => {
    const progressPercent = ((currentStep - 1) / totalQuestion) * 100;
    setProgress(progressPercent.toFixed(0));
  }, [currentStep, totalQuestion]);

  return (
    <Layout className="layout">
      <Header className="header">
        <Title level={1}>Survey</Title>
      </Header>
      <Content className="content">
        <div className="frame-header" />
        {children}
        <div className="frame-footer">
          {inProgress && (
            <ProgressBar
              currentStep={currentStep}
              totalQuestion={totalQuestion}
              progress={progress}
            />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Jobe</Footer>
    </Layout>
  );
};

export default AppLayout;
