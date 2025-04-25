/* eslint-disable no-unused-vars */
import "./EditNavbar.css";
import SelectInput from "./Inputs/PrimitiveTypes/SelectInput";
import activeIcon from "../../assets/active.svg";
import hoverIcon from "../../assets/hover.svg";

import ColorInput from "./Inputs/PrimitiveTypes/ColorInput";
import NumericInput from "./Inputs/PrimitiveTypes/NumericInput";
import TextInput from "./Inputs/PrimitiveTypes/TextInput";

export default function EditNavbar({ componentName, props, onPropChange, config }) {

    const renderInput = (propName, propConfig) => {
        const { type } = propConfig;
        const value = props[propName];
        const borderValue = value;
        function updateBorder(type, newvalue) {
            if (type === "width") {
                borderValue.width = newvalue;
            } else if (type === "style") {
                borderValue.style = newvalue;
            } else if (type === "color") {
                borderValue.color = newvalue;
            }

            onPropChange(propName, borderValue);
        }

        switch (type) {
        case "number-px":
            return (
                <NumericInput
                id={propName}
                value={value}
                onChange={(e) => onPropChange(propName, e.target.value)}
                max={config[propName].max}
                step={1}
                />
            )
        case "color":
            return (
                <ColorInput
                id={propName}
                value={value}
                onChange={(e) => onPropChange(propName, e.target.value)}
                />
            );
        case "text":
            return (
                <TextInput
                id={propName}
                value={value}
                onChange={(e) => onPropChange(propName, e.target.value)}
                />
            );
        case "border":
            return (
                <>
                <NumericInput
                id={propName}
                value={value.width}
                onChange={(e) => updateBorder("width", e.target.value)}
                max={50}
                step={1}
                />
                <SelectInput
                id={propName}
                value={value.style}
                onChange={(e) => updateBorder("style", e.target.value)}
                options={["none", "solid", "dashed", "dotted"]}
                />
                <ColorInput
                id={propName}
                value={value.color}
                onChange={(e) => updateBorder("color", e.target.value)}
                />
                </>
            );
        case "none":
            return null;
        default:
            return (
            <input
                type={type}
                value={value}
                onChange={(e) => onPropChange(propName, e.target.value)}
            />
            );
        }
    };
    


return (
    <div className="edit-navbar">
        {config && Object.entries(config).map(([propName, { type }]) => (
            <div key={propName} className="edit-navbar-items">
                <h6 className="edit-navbar-label font-normal"><label htmlFor={`${propName}-${type}`}>{type === "none" ? null : `${propName.replace("_", " ")}:`}</label></h6>

                {renderInput(propName, { type })}

                <div style={{display: "inline-block",backgroundColor: "rgb(var(--text-400-c), 0.2)",color: "var(--text-500)",width: "48px", aspectRatio: "1/1", padding: "5px", borderRadius: "10px", marginTop: "10px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>
                </div>
                
                <div style={{display: "inline-block" ,backgroundColor: "rgb(var(--text-400-c), 0.2)",color: "var(--text-500)",width: "48px", aspectRatio: "1/1", padding: "5px", borderRadius: "10px", marginTop: "10px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                </div>
            </div>
        ))}

    </div>
);
};
