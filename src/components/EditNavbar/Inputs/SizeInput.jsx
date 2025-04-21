import './SizeInput.css'

export default function SizeInput({name, max}) {
return (
    <div id={name} style={{width: '100%', display: 'flex', gap: '10px', justifyContent: 'start', flexWrap: 'wrap'}}>
        <label htmlFor={`${name}-input`} className='label font-text'><h6>{name}</h6></label>
        <div style={{display: 'flex', gap: '10px', width: '100%'}}>
            <input min={0} max={10000} className='Numinput' id={`${name}-input`} type="number" placeholder="number" />
            <input className='Numinput-slider' id={`${name}-slider`} type='range' min={0} max={max}/>
        </div>
    </div>
);
}