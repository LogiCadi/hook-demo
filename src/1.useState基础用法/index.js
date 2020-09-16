import React, { useState } from "react";

const Index = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <div id="count">count: {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default Index;
