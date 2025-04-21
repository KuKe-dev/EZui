import { useEffect } from 'react';

import './ColorInput.css'

export default function ColorInput({name}) {

    useEffect(() => {
            const checkbox = document.querySelector(`#${name}-checkbox`);
            const input = document.querySelector(`#${name}-input`);
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
        }, [name]);

return (
    <div id={name} style={{width: '100%', display: 'flex', gap: '30px', justifyContent: 'start',alignItems: 'center', flexWrap: 'wrap'}}>
        <label htmlFor={`${name}-input`} className='label font-text'><h6>{name}</h6></label>
        <input className='Colorcheckbox' id={`${name}-checkbox`} type='checkbox' defaultChecked />
        <input className='Colorinput' id={`${name}-input`} type="color"/>
    </div>
);
}