import { useState, useEffect } from "react";

interface IChatInputProps {
    onSubmit: (value: string) => void;
    setUserIsTyping: (isTyping: boolean) => void;
    userIsTyping: boolean;
}

export const ChatInput = ({ onSubmit, setUserIsTyping, userIsTyping }: IChatInputProps): JSX.Element => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (inputValue === "" && userIsTyping === true) {
            setUserIsTyping(false);
        } else if (inputValue !== "" && userIsTyping === false) {
            setUserIsTyping(true);
        }
    }, [inputValue, setUserIsTyping, userIsTyping]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue.trim());
                setInputValue("");
            }}
        >
            <div className="input-group">
                <textarea
                    className="form-control chat-input"
                    aria-label="Chat Text Area"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
                <div className="input-group-append">
                    <button className="input-group-text chat-input-button px-3" type="submit">
                        Chat
                    </button>
                </div>
            </div>
        </form>
    );
};
