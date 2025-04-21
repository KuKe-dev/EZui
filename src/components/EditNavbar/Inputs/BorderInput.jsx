export default function BorderInput({name}) {

return (
    <div id={name} style={{width: '100%', display: 'flex', gap: '30px', justifyContent: 'start', flexWrap: 'wrap'}}>
        <label className='font-text'>{name}:</label>
        <select id={`${name}-style`}>
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="inset">inset</option>
            <option value="solid">solid</option>
        </select>
        <input min={0} max={1000} id={`${name}-input`} type="number" placeholder="number" />
        <input id={`${name}-slider`} type='range' min={0} max={20}/>
        <input id={`${name}-color`} type="color"/>
    </div>
);
}