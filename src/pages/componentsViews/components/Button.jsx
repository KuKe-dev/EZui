import { useState } from "react";

const Button = (props) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);


const handleStateStyles = (value) => {
    if (typeof value === "object") {
        return hover ? (active ? value.active : value.hover) : value.normal;
    }
    return value;
};

const buttonStyles = {
    fontSize: handleStateStyles(`${props.fontSize}px`),
    color: handleStateStyles(props.Text_Color),
    width: handleStateStyles(`${props.width}px`),
    height: handleStateStyles(`${props.height}px`),
    borderRadius: handleStateStyles(`${props.borderRadius}px`),
    backgroundColor: handleStateStyles(props.color),
    border: `${handleStateStyles(`${props.border.width}px`)} ${handleStateStyles(props.border.style)} ${handleStateStyles(props.border.color)}`,
    overflow: "hidden",
    textAlign: "center",
};

return (
    <button 
        id="button"
        style={buttonStyles}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        className="button"
    >
        {props.Text}    
    </button>
);
}
Button.displayName = "Button";

export default Button