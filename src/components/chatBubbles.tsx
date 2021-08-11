import { IChatUser, IChatLogEntry } from "../controllers/chatSimContainer";

interface IChatBubblesProps extends IChatUser {
    chatLogs: IChatLogEntry[];
}

export const ChatBubbles = ({ chatUserId, chatLogs }: IChatBubblesProps): JSX.Element => {
    return (
        <div className="mt-3">
            {chatLogs.map((chatLog, index) => {
                const leftBubble = chatLog.chatUserId === chatUserId;
                return (
                    <div className="mb-3 chat-bubble-container" key={`${index}_${chatLog.chatUserId}`}>
                        <div className={`mb-4 chat-bubble shadow bubble-origin-${leftBubble ? "left" : "right"}`}>
                            {chatLog.chatLogContent}
                        </div>
                        <div className={`d-flex justify-content-${leftBubble ? "start" : "end"}`}>
                            <div className="shadow chat-bubble-user-icon d-flex align-items-center justify-content-center">
                                <span>{chatLog.chatUserName[0]}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
