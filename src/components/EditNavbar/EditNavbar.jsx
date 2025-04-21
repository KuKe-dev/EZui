import { useEffect } from "react";

import './EditNavbar.css'

import SizeInput from './Inputs/SizeInput.jsx';


export default function EditNavbar() {

    useEffect(() => {
        const checkbox = document.querySelector(`#backgroundColor-checkbox`);
        const input = document.querySelector(`#backgroundColor-input`);
        const handleChange = () => {
            if (checkbox.checked) {
                input.removeAttribute('disabled');
            } else {
                input.setAttribute('disabled', '');
            }
        };
        checkbox.addEventListener('change', handleChange);
        handleChange();
        return () => checkbox.removeEventListener('change', handleChange);
    }, []);
    

return (    
    <nav className="editNavbar">
        <SizeInput
            name='width'
            max={400}
        />
        <SizeInput
            name='height'
            max={200}
        />
        <div id="backgroundColor" style={{width: '100%', display: 'flex', gap: '30px', justifyContent: 'start'}}>
            <label htmlFor="width-input" className='font-text'>backgroundColor:</label>
            <input id={`backgroundColor-checkbox`} type='checkbox' defaultChecked />
            <input id={`backgroundColor-input`} type="color"/>
        </div>
        <SizeInput
            name='borderRadius'
            max={100}
        />
    </nav>
)
}