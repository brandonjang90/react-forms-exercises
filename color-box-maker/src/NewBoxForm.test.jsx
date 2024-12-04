import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", () => {
  render(<NewBoxForm addBox={() => {}} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it("allows the user to fill out the form", () => {
  const addBox = jest.fn();
  render(<NewBoxForm addBox={addBox} />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/color/i), { target: { value: "red" } });
  fireEvent.change(screen.getByLabelText(/width/i), { target: { value: "50" } });
  fireEvent.change(screen.getByLabelText(/height/i), { target: { value: "50" } });

  expect(screen.getByDisplayValue("red")).toBeInTheDocument();
  expect(screen.getByDisplayValue("50")).toBeInTheDocument();
});

it("calls addBox with the correct data on submit", () => {
  const addBox = jest.fn();
  render(<NewBoxForm addBox={addBox} />);

  // Simulate form submission
  fireEvent.change(screen.getByLabelText(/color/i), { target: { value: "green" } });
  fireEvent.change(screen.getByLabelText(/width/i), { target: { value: "200" } });
  fireEvent.change(screen.getByLabelText(/height/i), { target: { value: "200" } });
  fireEvent.click(screen.getByText(/add box/i));

  // Check if addBox was called with correct arguments
  expect(addBox).toHaveBeenCalledWith(expect.objectContaining({
    color: "green",
    width: "200",
    height: "200",
    id: expect.any(String),
  }));
});
