import React from "react";
import { render } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new box when the form is submitted", () => {
  render(<BoxList />);

  // Fill out and submit the form
  fireEvent.change(screen.getByLabelText(/color/i), { target: { value: "blue" } });
  fireEvent.change(screen.getByLabelText(/width/i), { target: { value: "100" } });
  fireEvent.change(screen.getByLabelText(/height/i), { target: { value: "100" } });
  fireEvent.click(screen.getByText(/add box/i));

  // Check that the new box is displayed
  expect(screen.getByText(/remove/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
});

it("removes a box when the remove button is clicked", () => {
  render(<BoxList />);

  // Add a box
  fireEvent.change(screen.getByLabelText(/color/i), { target: { value: "blue" } });
  fireEvent.change(screen.getByLabelText(/width/i), { target: { value: "100" } });
  fireEvent.change(screen.getByLabelText(/height/i), { target: { value: "100" } });
  fireEvent.click(screen.getByText(/add box/i));

  // Remove the box
  fireEvent.click(screen.getByText(/remove/i));

  // Check that the box is no longer displayed
  expect(screen.queryByText(/remove/i)).not.toBeInTheDocument();
});
