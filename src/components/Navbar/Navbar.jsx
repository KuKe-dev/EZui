import Dropdown from './Dropdown';
import './Navbar.css'

export default function Navbar() {

return (    
    <nav className="navbar">
        <ul>
            <Dropdown 
                id="1"
                text="Who We Are?"
                childrens={[
                    <a className='item' href='/'>Home</a>,
                    <a className='item' href='/about'>About</a>,
                ]}
            />
            <Dropdown 
                id="2"
                text="All Components"
                open
                childrens={[
                    <a className='item' href='/about'>Component 1</a>,
                ]}
            />
        </ul>
    </nav>
)
}