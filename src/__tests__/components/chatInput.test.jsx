import { fireEvent, render, screen } from "@testing-library/react";
import { ChatInput } from "../../components/chatInput";

describe("Chat Input", () => {
    test("Renders input and chat button", () => {
        render(<ChatInput onSubmit={(value) => null} />);
        expect(screen.getByText("Chat")).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: "Chat Text Area" })).toBeInTheDocument();
    });
    test("Call onSubmit when clicked", () => {
        const mockFn = jest.fn();
        render(<ChatInput onSubmit={mockFn} />);
        expect(mockFn).toHaveBeenCalledTimes(0);
        fireEvent.click(screen.getByText("Chat"));
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
