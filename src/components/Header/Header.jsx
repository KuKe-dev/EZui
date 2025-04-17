import ThemeSwitch from "../ui/ThemeSwitch";

import './Header.css'


export default function Header() {

return (
    <header className="header">
        <h1 className="font-title logo">EZui</h1>
        <ThemeSwitch />
    </header>
)
}
