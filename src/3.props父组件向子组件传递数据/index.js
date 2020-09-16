import React, { useState } from "react";
import Son from "./son";

const Index = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <Son count={count} />
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default Index;
