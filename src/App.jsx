import React from "react";
import Body from "./Body";

export default function App({}) {
  const [selected, setSelected] = React.useState([]);

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

  return (
    <div className="wrapper">
      <Body
        selected={selected}
        onPartClick={onPartClick}
      />
    </div>
  );
}
