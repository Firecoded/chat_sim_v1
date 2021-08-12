import { useRef, useEffect } from "react";
import { IChatUser, IChatLogEntry } from "../controllers/chatSimContainer";

interface IChatBubblesProps extends IChatUser {
    chatLogs: IChatLogEntry[];
}

export const ChatBubbles = ({ chatUserId, chatLogs }: IChatBubblesProps): JSX.Element => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatLogs]);

    const addGutter = (addGutter: boolean) => {
        if (addGutter) {
            return <div className="col-md-2 d-sm-none d-md-block"></div>;
        }
    };

    const addUserIcon = (addIcon: boolean, leftBubble: boolean, initial: string) => {
        if (addIcon) {
            return (
                <div className={`col-12 d-flex justify-content-${leftBubble ? "start" : "end"}`}>
                    <div
                        className={`${
                            leftBubble ? "left" : "right"
                        }-user-bubble shadow chat-bubble-user-icon d-flex align-items-center justify-content-center`}
                    >
                        <span>{initial}</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="mt-3 p-3">
            {chatLogs.map((chatLog, index) => {
                const leftBubble = chatLog.chatUserId === chatUserId;
                const showUserIcon =
                    index === chatLogs.length - 1 || chatLog.chatUserId !== chatLogs[index + 1].chatUserId;
                const bubbleOriginElement = showUserIcon
                    ? `mb-4 bubble-origin-${leftBubble ? "left" : "right"}`
                    : `mb-1`;
                return (
                    <div className="mb-2 chat-bubble-container row" key={`${index}_${chatLog.chatUserId}`}>
                        {addGutter(!leftBubble)}
                        <div className={`col-md-10 col-sm-12 p-3 chat-bubble shadow ${bubbleOriginElement}`}>
                            {chatLog.chatLogContent}
                        </div>
                        {addGutter(leftBubble)}
                        {addUserIcon(showUserIcon, leftBubble, chatLog.chatUserName[0])}
                    </div>
                );
            })}
            <div ref={messagesEndRef} />
        </div>
    );
};
