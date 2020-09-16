import React, { useRef, memo } from "react";
import Son from "./son";

const Index = () => {
  // son组件的引用
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
