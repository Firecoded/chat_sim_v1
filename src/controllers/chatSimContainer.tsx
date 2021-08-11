import { useState } from "react";
import { ChatContainer } from "../components/chatContainer";
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

const MOCK_CHAT_LOGS: IChatLogEntry[] = [
    {
        chatUserId: 0,
        chatUserName: "Jim",
        chatLogContent: "Hey There!",
    },
    {
        chatUserId: 1,
        chatUserName: "Pam",
        chatLogContent: "Hey Jim!",
    },
];

export const ChatSimContainer = (): JSX.Element => {
    const [chatLogs, setChatLogs] = useState<IChatLogEntry[]>(MOCK_CHAT_LOGS);
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

    const handleChatSubmit = (chatEntry: IChatLogEntry) => {
        setChatLogs([...chatLogs, chatEntry]);
    };
    return (
        <div className="chat-sim-container container-fluid h-100 rounded-corners-all d-flex flex-column">
            <div className="row d-md-none">
                <div className="col-12 p-0">
                    <ChatToggle
                        activeToggle={activeChatLog}
                        toggleOptions={chatUsers.map((user) => user.chatUserName)}
                        onToggleClick={setActiveChatLog}
                    />
                </div>
            </div>
            <div className="row flex-fill">
                <div className={`mb-2 col-md-6 col-sm-12 ${activeChatLog === 1 ? "d-none d-md-block" : ""}`}>
                    <ChatContainer {...chatUsers[0]} chatLogs={chatLogs} handleChatSubmit={handleChatSubmit} />
                </div>
                <div className={`mb-2 col-md-6 col-sm-12 ${activeChatLog === 0 ? "d-none d-md-block" : ""}`}>
                    <ChatContainer {...chatUsers[1]} chatLogs={chatLogs} handleChatSubmit={handleChatSubmit} />
                </div>
            </div>
        </div>
    );
};
