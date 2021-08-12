import { render, screen } from "@testing-library/react";
import { ChatBubbles } from "../../components/chatBubbles";

const MOCK_CHAT = [
    {
        chatUserId: 0,
        chatUserName: "Jim",
        chatLogContent: "Hi Pam!",
    },
    {
        chatUserId: 1,
        chatUserName: "Pam",
        chatLogContent: "Hey Jim!",
    },
];

const MOCK_USERS = [
    {
        chatUserId: 0,
        chatUserName: "Jim",
        isTyping: false,
    },
    {
        chatUserId: 1,
        chatUserName: "Pam",
        isTyping: false,
    },
];

describe("Chat Bubbles", () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};
    test("Renders chat content", () => {
        render(<ChatBubbles {...MOCK_USERS[0]} chatLogs={MOCK_CHAT} otherUser={MOCK_USERS[1]} />);
        expect(screen.getByText(MOCK_CHAT[0].chatLogContent)).toBeInTheDocument();
        expect(screen.getByText(MOCK_CHAT[1].chatLogContent)).toBeInTheDocument();
    });
    test("Renders user initials", () => {
        render(<ChatBubbles {...MOCK_USERS[0]} chatLogs={MOCK_CHAT} otherUser={MOCK_USERS[1]} />);
        expect(screen.getByText(MOCK_CHAT[0].chatUserName[0])).toBeInTheDocument();
        expect(screen.getByText(MOCK_CHAT[1].chatUserName[0])).toBeInTheDocument();
    });
    test("Does not render ellipsis when other user isTyping = false", () => {
        render(<ChatBubbles {...MOCK_USERS[0]} chatLogs={MOCK_CHAT} otherUser={MOCK_USERS[1]} />);
        expect(screen.queryByTestId("is-typing")).toBeNull();
    });
    test("Render ellipsis when other user isTyping = true", () => {
        const otherUserClone = { ...MOCK_USERS[1], isTyping: true };
        render(<ChatBubbles {...MOCK_USERS[0]} chatLogs={MOCK_CHAT} otherUser={otherUserClone} />);
        expect(screen.getByTestId("is-typing")).toBeInTheDocument();
    });
});
