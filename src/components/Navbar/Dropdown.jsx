import './Dropdown.css'



export default function Dropdown({id, text, childrens, open}) {

    function handleDropdown() {
        const dropdown = document.querySelector(`#dropdown${id}`);
        const dropdownButton = document.querySelector(`#dropdown-button${id}`);
        dropdown.classList.toggle('open');
        dropdownButton.classList.toggle('open');
    }
    
return (
    <>
        <li><a id={`dropdown-button${id}`} className={`dropdown-button item ${open ? 'open' : ''}`} onClick={(e) => {e.preventDefault(); handleDropdown()} }>{text}</a></li>
        <ul id={`dropdown${id}`} className={`dropdown ${open ? 'open' : ''}`}>
            {childrens}
        </ul>
    </>
)
}