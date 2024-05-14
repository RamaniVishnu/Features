import React, { useState, useEffect } from "react";
function BoxComp() {
  const [boxes, setBoxes] = useState([
    { id: 1, isVisible: true },
    { id: 2, isVisible: true },
    { id: 3, isVisible: true },
    { id: 4, isVisible: true },
    { id: 5, isVisible: true },
  ]);

  const handleToggle = (index) => {
    setBoxes(
      boxes.map((prev) => {
        if (prev.id === index) {
          return { ...prev, isVisible: !prev.isVisible };
        }
        return prev;
      })
    );
  };
  return (
    <>
      {boxes.map((box) => (
        <div key={box.id}>
          <button onClick={() => handleToggle(box.id)}>{box.id}</button>
          {box.isVisible && (
            <div
              style={{
                width: "100px",
                height: "100px",
                border: "3px solid black",
                margin: "10px",
              }}
            >
              {box.id}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default BoxComp;
