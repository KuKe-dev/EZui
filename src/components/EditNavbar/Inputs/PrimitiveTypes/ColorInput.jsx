import { useState } from "react";

import './ColorInput.css'

export default function ColorInput({id, value, onChange, }) {

    const [isChecked, setIsChecked] = useState(true);

    function handleCheckboxChange() {
        
        isChecked ? setIsChecked(false) : setIsChecked(true);
        isChecked ? onChange({target : {value : "transparent"}}) : onChange({target : {value : value}});
        isChecked ? document.getElementById(`${id}-color`).setAttribute('disabled', true) : document.getElementById(`${id}-color`).removeAttribute('disabled');
    }

    return (
        <div className="ColorInput-container">
            <input
                id={`${id}-checkbox`}
                className="ColorInput-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <input
                id={`${id}-color`}
                className="ColorInput-color"
                type="color"
                value={value}    
                onChange={onChange}
            />
        </div>
    );
}