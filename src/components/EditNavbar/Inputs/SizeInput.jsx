

export default function SizeInput({name, max}) {
return (
    <div id={name} style={{width: '100%', display: 'flex', gap: '10px', justifyContent: 'start'}}>
        <label htmlFor="width-input" className='font-text'>{name}:</label>
        <input min={0} max={10000} id={`${name}-input`} type="number" placeholder="number" />
        <input id={`${name}-slider`} type='range' min={0} max={max}/>
    </div>
);
}