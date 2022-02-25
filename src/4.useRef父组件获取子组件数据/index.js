import React, { useRef } from "react";
import Son from "./son";

const Index = () => {
  // useRef常见的用例便是命令式地访问子组件
  const sonRef = useRef();

  return (
    <>
      <Son ref={sonRef} />
      <button
        onClick={() => sonRef.current?.setCount(sonRef.current?.count + 1)}
      >
        click
      </button>
    </>
  );
};

export default Index;
