import React, { useState } from "react";
import Son from "./son";

const Index = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>click</button>
      <Son count={count} />
    </>
  );
};

export default Index;
