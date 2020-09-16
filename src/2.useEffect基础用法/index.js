import React, { useEffect, useState } from "react";

const Index = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("组件初次渲染完成");
    return () => {
      console.log("组件被销毁");
    };
  }, []);

  useEffect(() => {
    console.log("组件重新渲染");
  });

  useEffect(() => {
    console.log("watch 到 count 发生了改变，新的值为 " + count);
  }, [count]);

  return (
    <>
      <div id="count">count: {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default Index;
