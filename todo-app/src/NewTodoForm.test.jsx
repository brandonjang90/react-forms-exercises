import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

describe("NewTodoForm component", () => {
    it("renders without crashing", () => {
        render(<NewTodoForm addTodo={() => {}} />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("NewTodoForm functionality", () => {
    it("submits the form with the correct data", () => {
        const addTodo = jest.fn();
        const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodo} />);

        const input = getByLabelText("Task");
        const button = getByText("Add Todo");

        fireEvent.change(input, { target: { value: "New Task" } });
        fireEvent.click(button);

        expect(addTodo).toHaveBeenCalledWith(expect.objectContaining({ task: "New Task" }));
    });

    it("resets the form after submission", () => {
        const { getByLabelText, getByText } = render(<NewTodoForm addTodo={() => {}} />);

        const input = getByLabelText("Task");
        const button = getByText("Add Todo");

        fireEvent.change(input, { target: { value: "Another Task" } });
        fireEvent.click(button);

        expect(input.value).toBe("");
    });
});
