import React, { useState } from 'react';
export default function App() {
  const [titles, setTitles] = useState([
    { id: 1, name: 'title 1', para: 'this is title 1' },
    { id: 2, name: 'title 2', para: 'this is title 2' },
    { id: 3, name: 'title 3', para: 'this is title 3' },
  ]);

  const [accordIndex, setAccordIndex] = useState(null);

  const handleVisibility = (indexVal) => {
    setAccordIndex(indexVal);
  };
  return (
    <div>
      {titles.map((title, index) => (
        <div key={title.name}>
          <h1
            style={{ border: '2px solid' }}
            onClick={() => handleVisibility(index)}
          >
            {title.name}
          </h1>
          {index === accordIndex && <p>{title.para}</p>}
        </div>
      ))}
    </div>
  );
}
