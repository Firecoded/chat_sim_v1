import { IChatLogEntry, IChatUser } from "../controllers/chatSimContainer";
import { ChatBubbles } from "./chatBubbles";

interface IChatContainerProps extends IChatUser {
    chatLogs: IChatLogEntry[];
}

export const ChatContainer = ({ chatUserId, chatUserName, chatLogs }: IChatContainerProps): JSX.Element => {
    return (
        <div className="chat-container d-flex flex-column h-100">
            <div className="chat-logs flex-fill">
                <ChatBubbles chatLogs={chatLogs} chatUserId={chatUserId} chatUserName={chatUserName} />
            </div>
        </div>
    );
};
