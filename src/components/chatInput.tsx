interface IChatInputProps {
    temp?: string;
    onSubmit: (value: string) => void;
}

export const ChatInput = (props: IChatInputProps): JSX.Element => {
    return (
        <form>
            <div className="input-group">
                <textarea className="form-control" aria-label="With textarea"></textarea>
                <div className="input-group-append">
                    <span className="input-group-text">Chat</span>
                </div>
            </div>
        </form>
    );
};
