import { useState } from "react";
import { ChatBubbles } from "../components/chatBubbles";
import { ChatInput } from "../components/chatInput";
import { ChatToggle } from "../components/chatToggle";

export interface IChatLogEntry {
    chatUserId: number;
    chatUserName: string;
    chatLogContent: string;
    chatUserIcon?: string;
}

export interface IChatUser {
    chatUserId: number;
    chatUserName: string;
}

export const ChatSimContainer = (): JSX.Element => {
    const [chatLogs, setChatLogs] = useState<IChatLogEntry[]>([
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
    ]);
    const [activeChatLog, setActiveChatLog] = useState(0);
    const [chatUsers, setChatUsers] = useState<IChatUser[]>([
        {
            chatUserId: 0,
            chatUserName: "Jim",
        },
        {
            chatUserId: 1,
            chatUserName: "Pam",
        },
    ]);

    return (
        <div className="shadow chat-sim-container container-fluid h-100 rounded-corners-all d-flex flex-column">
            <div className="row d-md-none">
                <div className="col-12 p-0">
                    <ChatToggle
                        activeToggle={activeChatLog}
                        toggleOptions={chatUsers.map((user) => user.chatUserName)}
                        onToggleClick={setActiveChatLog}
                    />
                </div>
            </div>
            <div className="row flex-fill overflow-auto">
                <div
                    className={`right-border pb-2 col-md-6 col-sm-12 ${activeChatLog === 1 ? "d-none d-md-block" : ""}`}
                >
                    <div className="chat-container d-flex flex-column h-100 p-2">
                        <div className="chat-logs flex-fill">
                            <ChatBubbles chatLogs={chatLogs} {...chatUsers[0]} />
                        </div>
                    </div>
                </div>
                <div className={`mb-2 col-md-6 col-sm-12 ${activeChatLog === 0 ? "d-none d-md-block" : ""}`}>
                    <div className="chat-container d-flex flex-column h-100 p-2">
                        <div className="chat-logs flex-fill">
                            <ChatBubbles chatLogs={chatLogs} {...chatUsers[1]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`top-border pb-2 col-md-6 col-sm-12 ${activeChatLog === 1 ? "d-none d-md-block" : ""}`}>
                    <div className="chat-input-container p-3">
                        <ChatInput
                            onSubmit={(inputValue: string) => {
                                if (inputValue === "") {
                                    return;
                                }
                                setChatLogs([...chatLogs, { ...chatUsers[0], chatLogContent: inputValue }]);
                            }}
                        />
                    </div>
                </div>
                <div className={`top-border pb-2 col-md-6 col-sm-12 ${activeChatLog === 0 ? "d-none d-md-block" : ""}`}>
                    <div className="chat-input-container p-3">
                        <ChatInput
                            onSubmit={(inputValue: string) => {
                                if (inputValue === "") {
                                    return;
                                }
                                setChatLogs([...chatLogs, { ...chatUsers[1], chatLogContent: inputValue }]);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
