export default function HoverInput({id, value, onChange, }) {
    return (
        <div className="HoverInput-container"> 
            <input
                id={`${id}-text`}
                className="HoverInput-text"
                type="text"
                value={value}    
                onChange={onChange}
                placeholder="Type here..."
            /> 
        </div>
    );
}