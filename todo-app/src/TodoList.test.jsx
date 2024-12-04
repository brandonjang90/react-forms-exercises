import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList component", () => {
    it("renders without crashing", () => {
        render(<TodoList />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<TodoList />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("TodoList functionality", () => {
    it("adds a new todo", () => {
        const { getByLabelText, getByText, queryByText } = render(<TodoList />);

        const input = getByLabelText("Task");
        const button = getByText("Add Todo");

        fireEvent.change(input, { target: { value: "Test Task" } });
        fireEvent.click(button);

        expect(queryByText("Test Task")).toBeInTheDocument();
    });

    it("removes a todo", () => {
        const { getByLabelText, getByText, queryByText } = render(<TodoList />);

        // Add a task
        const input = getByLabelText("Task");
        const addButton = getByText("Add Todo");
        fireEvent.change(input, { target: { value: "Task to Remove" } });
        fireEvent.click(addButton);

        // Remove the task
        const removeButton = getByText("Remove");
        fireEvent.click(removeButton);

        expect(queryByText("Task to Remove")).not.toBeInTheDocument();
    });
});
