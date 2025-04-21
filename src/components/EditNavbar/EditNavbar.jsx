import './EditNavbar.css'

import SizeInput from './Inputs/SizeInput.jsx';
import ColorInput from "./Inputs/ColorInput.jsx";
import BorderInput from './Inputs/BorderInput.jsx';


export default function EditNavbar() {

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
        <ColorInput
            name='backgroundColor'
        />
        <ColorInput
            name='color'
        />
        <SizeInput
            name='borderRadius'
            max={100}
        />
        <BorderInput
            name='border'
        />
    </nav>
)
}