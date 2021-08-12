import { fireEvent, render, screen } from "@testing-library/react";
import { ChatToggle } from "../../components/chatToggle";

const MOCK_USERS = ["Jim", "Pam"];

describe("Chat Input", () => {
    test("Renders 2 tabs with user names", () => {
        render(<ChatToggle activeToggle={0} toggleOptions={MOCK_USERS} onToggleClick={(someData) => null} />);
        expect(screen.getByText(MOCK_USERS[0])).toBeInTheDocument();
        expect(screen.getByText(MOCK_USERS[1])).toBeInTheDocument();
    });
    test("Fire callback when tab  clicked", () => {
        const mockFn = jest.fn();
        render(<ChatToggle activeToggle={0} toggleOptions={MOCK_USERS} onToggleClick={mockFn} />);
        expect(mockFn).toHaveBeenCalledTimes(0);
        fireEvent.click(screen.getByText(MOCK_USERS[0]));
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
