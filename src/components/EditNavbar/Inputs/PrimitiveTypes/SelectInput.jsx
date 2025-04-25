export default function SelectInput({id, value, onChange, options }) {
    return (
        <div className="SelectInput-container"> 
            <select
                id={`${id}-select`}
                value={value}
                onChange={onChange}
            > 
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}