import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("<ProgressBar/>", () => {
  it("renders the component", () => {
    const container = render(
      <ProgressBar currentStep={2} totalQuestion={10} progress={20} />
    );

    expect(container.baseElement).toMatchSnapshot();
    expect(
      container.baseElement
        .querySelectorAll("span.ant-progress-text")[0]
        .getAttribute("title")
    ).toEqual("20%");
  });
});
