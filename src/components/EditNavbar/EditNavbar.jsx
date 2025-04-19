import './EditNavbar.css'

export default function EditNavbar() {

return (    
    <nav className="editNavbar">
        <div id='width' style={{width: '100%', display: 'flex', gap: '10px', justifyContent: 'space-between'}}>
            <label htmlFor="width-input" className='font-text'>Width:</label>
            <input min={0} max={1000} id='width-input' type="number" placeholder="number" />
            <input id='width-slider' type='range' min={0} max={200}/>
        </div>
        <div id='height' style={{width: '100%', display: 'flex', gap: '10px', justifyContent: 'space-between'}}>
            <label htmlFor="height-input" className='font-text'>Height:</label>
            <input min={0} max={500} id='height-input' type="number" placeholder="number" />
            <input id='height-slider' type='range' min={0} max={100}/>
        </div>
    </nav>
)
}