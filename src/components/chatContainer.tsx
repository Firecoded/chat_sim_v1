import { IChatLogEntry, IChatUser } from "../controllers/chatSimContainer";
import { ChatInput } from "./chatInput";

interface IChatContainerProps extends IChatUser {
    chatLogs: IChatLogEntry[];
    handleChatSubmit: (chatEntry: IChatLogEntry) => void;
}

export const ChatContainer = ({ handleChatSubmit, chatUserId, chatUserName }: IChatContainerProps): JSX.Element => {
    const onSubmit = (value: string) => {
        handleChatSubmit({ chatUserId, chatUserName, chatLogContent: value });
    };
    return (
        <div className="chat-container d-flex flex-column h-100">
            <div className="chat-logs flex-fill"></div>
            <div className="chat-input-container">
                <ChatInput onSubmit={onSubmit} />
            </div>
        </div>
    );
};
