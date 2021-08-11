export interface IChatToggleProps {
    activeToggle: number;
    toggleOptions: string[];
    onToggleClick: (toggleOptionIndex: number) => void;
}

export const ChatToggle = ({ toggleOptions, activeToggle, onToggleClick }: IChatToggleProps): JSX.Element => {
    return (
        <div className="chat-toggle-container d-flex rounded-corners-top">
            {toggleOptions.map((option, index) => {
                return (
                    <div
                        className={`w-50 d-flex justify-content-center align-items-center p-3 rounded-corners-top ${
                            activeToggle === index ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => onToggleClick(index)}
                    >
                        <span>{option}</span>
                    </div>
                );
            })}
        </div>
    );
};
