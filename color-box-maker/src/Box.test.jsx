import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", () => {
  render(<Box id="1" color="red" width={100} height={100} removeBox={() => {}} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Box id="1" color="red" width={100} height={100} removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
