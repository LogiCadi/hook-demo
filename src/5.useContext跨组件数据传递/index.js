import React, { createContext, useState } from "react";
import Son from "./son";

export const Context = createContext(0);

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Context.Provider value={count}>
        <Son />
      </Context.Provider>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default Index;
