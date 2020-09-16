import React, { useContext } from "react";
import { Context } from ".";

const Son = () => {
  const context = useContext(Context);
  return (
    <>
      <button onClick={() => context.setCount(context.count + 1)}>click</button>
    </>
  );
};

export default Son;
