import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo component", () => {
    it("renders without crashing", () => {
        render(<Todo id="1" todo="Test Todo" removeTodo={() => {}} />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Todo id="1" todo="Test Todo" removeTodo={() => {}} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("Todo component functionality", () => {
    it("calls removeTodo when the button is clicked", () => {
        const removeTodo = jest.fn();
        const { getByText } = render(<Todo id="1" todo="Task to Remove" removeTodo={removeTodo} />);

        const button = getByText("Remove");
        fireEvent.click(button);

        expect(removeTodo).toHaveBeenCalledWith("1");
    });
});