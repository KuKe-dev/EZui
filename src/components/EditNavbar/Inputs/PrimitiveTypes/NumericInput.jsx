import "./NumericInput.css";

export default function NumericInput({id, value, onChange, max, step }) {
    return (
        <div className="NumericInput-container">
            <input
                id={`${id}-number`}
                className="NumericInput-number"
                type="number"
                value={value}
                onChange={onChange}
                min={0}
                step={step}
                placeholder="0"
            />
            <input
                id={`${id}-range`}
                className="NumericInput-range"
                type="range"
                value={value}    
                onChange={onChange}
                min={0}
                max={max}
                step={step}
            />
        </div>
    );
}