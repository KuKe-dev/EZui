/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export default function Button(props) {

    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const [text, setText] = useState(props.text ? props.text : "Button");
    const [width, setWidth] = useState(props.width ? props.width : '100px');
    const [height, setHeight] = useState(props.height ? props.height : '50px');
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor ? props.backgroundColor : 'var(--primary-500)');
    const [color, setColor] = useState(props.color ? props.color : 'var(--text-500)');
    const [border, setBorder] = useState(props.border ? props.border : 'none');
    const [borderRadius, setBorderRadius] = useState(props.borderRadius ? props.borderRadius : '5px');

    



    //* Set Initial Values Inputs
    const UseSetInitialValues = (valueName, value) => useEffect(() => {
        if (typeof value !== 'object') {
            const widthInput = document.querySelector(`#${valueName}-input`);
            const widthSlider = document.querySelector(`#${valueName}-slider`);
            widthInput.value = Number(value.replace('px', ''))
            widthSlider.value = Number(value.replace('px', ''))
        } else {
            const widthInput = document.querySelector(`#${valueName}-input`);
            const widthSlider = document.querySelector(`#${valueName}-slider`);
            widthInput.value = Number(value.normal.replace('px', ''))
            widthSlider.value = Number(value.normal.replace('px', ''))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    UseSetInitialValues("width", width);
    UseSetInitialValues("height", height);

    const UseUpdateInput = (inputName, setSome) => useEffect(() => {
        const Input = document.querySelector(`#${inputName} #${inputName}-input`);
        const Slider = document.querySelector(`#${inputName} #${inputName}-slider`);
        Input.addEventListener('input', () => {
            setSome(`${Input.value}px`);
            
            Slider.value = Input.value;
        });
        Slider.addEventListener('input', () => {
            setSome(`${Slider.value}px`);
            Input.value = Slider.value;
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    UseUpdateInput('width', setWidth);
    UseUpdateInput('height', setHeight);

    function handleStateStyles(obj) {
        if (typeof obj === "object") {
            return hover ? active ? obj.active : obj.hover : obj.normal;
        } else {
            return obj;
        }
    }

    return (
        <>
            <button style={{
                width: handleStateStyles(width),
                height: handleStateStyles(height),
                backgroundColor: handleStateStyles(backgroundColor),
                color: handleStateStyles(color),
                border: handleStateStyles(border),
                borderRadius: handleStateStyles(borderRadius),
                cursor: "pointer"
                
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            className="btn">{text}</button>
        </>
    )
}