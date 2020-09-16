import React, { useContext } from "react";
import { Context } from ".";

const Son = () => {
  // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
  const context = useContext(Context);
  return (
    <>
      <div>count: {context}</div>
    </>
  );
};

export default Son;
