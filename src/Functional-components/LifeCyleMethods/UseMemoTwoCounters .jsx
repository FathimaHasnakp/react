import React, { useState, useMemo } from "react";

const UseMemoTwoCounters = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // expensive calculation (example)
  const isEven = useMemo(() => {
    console.log("Checking even or odd (expensive task running)...");
    let i = 0;
    while (i < 2000000000) i++; // Heavy loop
    return countOne % 2 === 0;
  }, [countOne]); // runs ONLY when countOne changes

  return (
    <div style={{ padding: "20px" }}>
      <h1>useMemo Example (Two Counters)</h1>

      {/* Counter 1 */}
      <div>
        <h2>Counter One: {countOne}</h2>
        <button onClick={() => setCountOne(countOne + 1)}>Increment One</button>
        <p>Count One is: {isEven ? "Even" : "Odd"}</p>
      </div>

      <hr />

      {/* Counter 2 */}
      <div>
        <h2>Counter Two: {countTwo}</h2>
        <button onClick={() => setCountTwo(countTwo + 1)}>
          Increment Two
        </button>
      </div>
    </div>
  );
};

export default UseMemoTwoCounters;
