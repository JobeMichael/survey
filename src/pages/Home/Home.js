import React from "react";
import { Spin } from "antd";
import useFetch from "hooks/useFetch";
import SurveyCard from "components/SurveyCard/SurveyCard";

const Home = () => {
  const { data, loading } = useFetch("surveys");

  if (loading) {
    return <Spin tip="Loading..."></Spin>;
  }
  return (
    <>
      {data.surveys.map(({ id, title, tagline }) => (
        <SurveyCard key={id} id={id} title={title} tagline={tagline} />
      ))}
    </>
  );
};

export default Home;
