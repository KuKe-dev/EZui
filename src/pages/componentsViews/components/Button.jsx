/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export default function Button(props) {

    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const defaultStyles = {
        text: 'Button',
        width: "100px",
        height: '50px',
        backgroundColor: "#3A9CFD",
        color: "#ffffff",
        border: '1px solid #ffffff',    
        borderRadius: '5px'
    }

    //* Set Values
    const [text, setText] = useState(props.text ? props.text : defaultStyles.text);
    const [width, setWidth] = useState(props.width ? props.width : defaultStyles.width);
    const [height, setHeight] = useState(props.height ? props.height : defaultStyles.height);
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor ? props.backgroundColor : defaultStyles.backgroundColor);
    const [color, setColor] = useState(props.color ? props.color : defaultStyles.color);
    const [border, setBorder] = useState(props.border ? props.border : defaultStyles.border);
    const [borderRadius, setBorderRadius] = useState(props.borderRadius ? props.borderRadius : defaultStyles.borderRadius);

    const UseInitialNumericValues = (valueName, value) => useEffect(() => {
        if (typeof value !== 'object') {
            const Input = document.querySelector(`#${valueName}-input`);
            const Slider = document.querySelector(`#${valueName}-slider`);
            Input.value = Number(value.replace('px', ''))
            Slider.value = Number(value.replace('px', ''))
        } else {
            const Input = document.querySelector(`#${valueName}-input`);
            const Slider = document.querySelector(`#${valueName}-slider`);
            Input.value = Number(value.normal.replace('px', ''))
            Slider.value = Number(value.normal.replace('px', ''))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const UseInitialColorValues = (valueName, value) => useEffect(() => {
        if (typeof value !== 'object') {
            const Input = document.querySelector(`#${valueName}-input`);
            Input.value = value
        } else {
            const Input = document.querySelector(`#${valueName}-input`);
            Input.value = value.normal;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const UseInitialBorderValues = (valueName, value) => useEffect(() => {
        if (typeof value !== 'object') {
            const Input = document.querySelector(`#${valueName}-input`);
            const Slider = document.querySelector(`#${valueName}-slider`);
            const Style = document.querySelector(`#${valueName}-style`);
            const Color = document.querySelector(`#${valueName}-color`);
            Input.value = value.split(" ")[0].replace('px', '')
            Slider.value = value.split(" ")[0].replace('px', '')
            Style.value = value.split(" ")[1]
            Color.value = value.split(" ")[2]
        } else {
            const Input = document.querySelector(`#${valueName}-input`);
            Input.value = value.normal;
        }
    })

    const UseUpdateNumericInput = (inputName, setSome) => useEffect(() => {
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
    const UseUpdateColorInput = (inputName, setSome) => useEffect(() => {
        const Input = document.querySelector(`#${inputName} #${inputName}-input`);
        const CheckBox = document.querySelector(`#${inputName} #${inputName}-checkbox`);
        CheckBox.addEventListener('change', () => {
            if (CheckBox.checked) {
                setSome(Input.value);
            } else {
                setSome("transparent");
            }
        })
        Input.addEventListener('input', () => {
                    if (CheckBox.checked) {
                        setSome(Input.value);
                    } else {
                        setSome("transparent");
                    }
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const UseUpdateBorderInput = (inputName, setSome) => useEffect(() => {
        const Input = document.querySelector(`#${inputName} #${inputName}-input`);
        const Slider = document.querySelector(`#${inputName} #${inputName}-slider`);
        const Style = document.querySelector(`#${inputName} #${inputName}-style`);
        const Color = document.querySelector(`#${inputName} #${inputName}-color`);
        Input.addEventListener('input', () => {
            setSome(`${Input.value}px ${Style.value} ${Color.value}`);
            Slider.value = Input.value;
        });
        Slider.addEventListener('input', () => {
            setSome(`${Slider.value}px ${Style.value} ${Color.value}`);
            Input.value = Slider.value;
        })
        Style.addEventListener('input', () => {
            setSome(`${Input.value}px ${Style.value} ${Color.value}`);
        })
        Color.addEventListener('input', () => {
            setSome(`${Input.value}px ${Style.value} ${Color.value}`);
        })

    })

    //* Set Initial Values
    UseInitialNumericValues("width", width);
    UseInitialNumericValues("height", height);

    UseInitialNumericValues("borderRadius", borderRadius);

    UseInitialColorValues("backgroundColor", backgroundColor);
    UseInitialColorValues("color", color);

    UseInitialBorderValues("border", border);

    /* UseInitialBorderValues("border", border); */

    //* Update Values
    UseUpdateNumericInput('width', setWidth);
    UseUpdateNumericInput('height', setHeight);
    UseUpdateNumericInput('borderRadius', setBorderRadius); 

    UseUpdateColorInput('backgroundColor', setBackgroundColor);
    UseUpdateColorInput('color', setColor);

    UseUpdateBorderInput('border', setBorder);

    function handleStateStyles(obj) {
        if (typeof obj === "object") {
            return hover ? active ? obj.active : obj.hover : obj.normal;
        } else {
            return obj;
        }
    }

    return (
        <>
            <button id="button" style={{
                width: handleStateStyles(width),
                height: handleStateStyles(height),
                backgroundColor: handleStateStyles(backgroundColor),
                color: handleStateStyles(color),
                border: handleStateStyles(border),
                borderRadius: handleStateStyles(borderRadius),
                cursor: "pointer",
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            className="button">{text}</button>
        </>
    )
}