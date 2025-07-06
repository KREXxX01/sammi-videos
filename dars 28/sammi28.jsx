import React, { useState, useMemo } from 'react';

function SlowCalculationComponent() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const slowFunction = (num) => {
    console.log("Hisoblanmoqda...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result + num;
  };

  const computedValue = useMemo(() => slowFunction(number), [number]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useMemo bilan optimallashtirish</h2>

      <div>
        <label>Raqam kiriting: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label>Matn kiriting (hisobga ta'sir qilmaydi): </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <h3>Hisob natijasi: {computedValue}</h3>
      <p>Matn: {text}</p>
    </div>
  );
}

export default SlowCalculationComponent;
