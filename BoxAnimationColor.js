import React, { useState, useCallback, useEffect } from 'react';

export default function App() {
  const [boxes, setBoxes] = useState([
    { id: 1, isClicked: false },
    { id: 2, isClicked: false },
    { id: 3, isClicked: false },
    { id: 4, isClicked: false },
    { id: 5, isClicked: false },
  ]);
  const [captureLen, setLen] = useState(0);

  const handleClickable = (index) => {
    setBoxes(
      boxes.map((elem) => {
        if (elem.id === index) {
          return { ...elem, isClicked: !elem.isClicked };
        }
        return elem;
      })
    );
  };

  const autoClick = useCallback(() => {
    const clickLength = boxes.filter((box) => box.isClicked === true).length;

    setLen(clickLength);
    console.log('length', captureLen);
    if (captureLen === boxes.length) {
      console.log('yes....');
      boxes.forEach((box, index) => {
        setTimeout(() => {
          setBoxes((prevBoxes) =>
            prevBoxes.map((prevBox, i) =>
              i === index ? { ...prevBox, isClicked: false } : prevBox
            )
          );
        }, 1000 * (index + 1));
      });
    }
  }, [boxes, captureLen]);

  useEffect(() => {
    console.log('useEffect');
    autoClick();
  }, [boxes, captureLen]);

  return (
    <div>
      {boxes.map((box) => (
        <div
          key={box.id}
          style={{
            backgroundColor: box.isClicked ? 'yellow' : 'pink',
            width: '50px',
            height: '50px',
            border: '3px solid black',
          }}
          onClick={() => handleClickable(box.id)}
        >
          {box.id}
        </div>
      ))}
    </div>
  );
}
