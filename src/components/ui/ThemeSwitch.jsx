import { useEffect, useState } from "react";

export default function ThemeSwitch() {

    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    useEffect(() => {
        
        if (theme === 'dark') {
            setTheme('dark')
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-switch').checked = true;
        } else {
            setTheme('light')
            document.documentElement.setAttribute('data-theme', 'light');
            document.getElementById('theme-switch').checked = false;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Agregar esta línea de código
};

return (
    <>
        <input id="theme-switch" type="checkbox" onChange={handleChange}/>
    </>
)
};