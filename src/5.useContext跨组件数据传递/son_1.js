import React, { useContext } from "react";
import { Context } from ".";

const Son = () => {
  const context = useContext(Context);
  return (
    <>
      <div>count: {context.count}</div>
    </>
  );
};

export default Son;
