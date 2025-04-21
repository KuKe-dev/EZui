import './EditNavbar.css'

import SizeInput from './Inputs/SizeInput.jsx';
import ColorInput from "./Inputs/ColorInput.jsx";
import BorderInput from './Inputs/BorderInput.jsx';
import TextInput from './Inputs/TextInput.jsx';


export default function EditNavbar() {

return (    
    <nav className="editNavbar">
        <TextInput name='text' />
        <SizeInput name='width' max={400} />
        <SizeInput name='height' max={200} />

        <ColorInput name='backgroundColor' />
        <SizeInput name='borderRadius' max={100} />
        <BorderInput name='border' />
    </nav>
)
}