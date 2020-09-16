import React, { createContext, useState } from "react";
import Son_1 from "./son_1";
import Son_2 from "./son_2";

export const Context = createContext({
  count: 0,
  setCount: (count) => {},
});

const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={{ count, setCount }}>
      <Son_1 />
      <Son_2 />
    </Context.Provider>
  );
};

export default Index;
