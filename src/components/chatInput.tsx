import { useState } from "react";

interface IChatInputProps {
    temp?: string;
    onSubmit: (value: string) => void;
}

export const ChatInput = ({ onSubmit }: IChatInputProps): JSX.Element => {
    const [inputValue, setInputValue] = useState("");
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
