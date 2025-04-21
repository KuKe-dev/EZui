import './BorderInput.css'

export default function BorderInput({name}) {

return (
    <div id={name} style={{width: '100%', display: 'flex', columnGap: '30px',rowGap: '10px',alignItems: 'center', justifyContent: 'start', flexWrap: 'wrap'}}>
        <label className='label font-text'><h6>{name}</h6></label>

        <div style={{display: 'flex', gap: '10px', width: '100%'}}>
            <input min={0} max={10000} className='Numinput' id={`${name}-input`} type="number" placeholder="number" />
            <input className='Numinput-slider' id={`${name}-slider`} type='range' min={0} max={20}/>
        </div>

        <select className='Borderstyle' id={`${name}-style`}>
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="inset">inset</option>
            <option value="solid">solid</option>
        </select>
        
        <input className='Bordercolor' id={`${name}-color`} type="color"/>
    </div>
);
}