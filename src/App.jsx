import React from "react";
import Body from "./Body";

export default function App({}) {
  const [selected, setSelected] = React.useState([]);
  const [scale, setScale] = React.useState(0.7);

  const onPartClick = name => {
    const index = selected.indexOf(name);
    if (index === -1) {
      setSelected([...selected, name]);
    } else {
      const newSelection = [...selected];
      newSelection.splice(index, 1);
      setSelected(newSelection);
    }
  };

  const handleScaleChange = event => {
    setScale(parseFloat(event.target.value));
  };

  const dynamicStyles = {
    transform: `scale(${scale})`,
    transition: "transform 0.3s ease",
  };

  return (
    <div className="container">
      <div
        className="body-map"
        style={dynamicStyles}>
        <Body
          selected={selected}
          onPartClick={onPartClick}
        />
      </div>

      <input
        type="range"
        value={scale}
        onChange={handleScaleChange}
        min="0.7"
        max="1.2"
        step="0.1"
      />
      {/* {scale.toFixed(1)} */}
    </div>
  );
}
