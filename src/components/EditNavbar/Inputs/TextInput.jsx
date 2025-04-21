import './TextInput.css'

export default function TextInput({name}) {
return (
    <div id={name} style={{width: '100%', display: 'flex', gap: '10px', justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap'}}>
        <label htmlFor={`${name}-input`} className='label font-text'><h6>{name}</h6></label>
        <input className='Textinput' id={`${name}-input`} type="text" placeholder="text" />
        <input className='Textinput-color' id={`${name}-color`} type="color"/>

        <div style={{display: 'flex', gap: '10px', width: '100%'}}>
            <input min={0} max={1000} className='Numinput' id={`${name}-fontSize`} type="number" placeholder="number" />
            <input className='Numinput-slider' id={`${name}-slider`} type='range' min={0} max={64}/>
        </div>
    </div>
);
}