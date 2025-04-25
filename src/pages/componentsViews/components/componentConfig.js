// utils/componentConfig.js
export const componentConfig = {
    Button: {
        Text: { type: "text", default: "" },
        Text_Color: { type: "color", default: "#ffffff" },
        fontSize: { type: "number-px",max: "128", default: "16" },
        width: { type: "number-px",max: "1000", default: "200" },
        height: { type: "number-px",max: "500", default: "50" },
        borderRadius: { type: "number-px",max: "250", default: "10" },
        color: { type: "color", default: "#3498db" },
        border: { type: "border", default: { width: "2", style: "solid", styleOptions: ["none", "solid", "dashed", "dotted"], color: "#ffffff" } },
    },
    Card: {
      title: { type: "text", default: "Card Title" },
      backgroundColor: { type: "color", default: "#f0f0f0" },
      padding: { type: "text", default: "20px" },
    },
  };