import "./TextInput.css";

export default function TextInput({id, value, onChange, }) {
    return (
        <div className="TextInput-container">
            <input
                id={`${id}-text`}
                className="TextInput-text"
                type="text"
                value={value}    
                onChange={onChange}
                placeholder="Type here..."
            />
        </div>
    );
}