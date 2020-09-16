import React, { forwardRef, useState, useImperativeHandle } from "react";

const Son = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
    // 在大多数情况下，应当避免使用 ref 这样的命令式代码。
    // useImperativeHandle 应当与 forwardRef 一起使用
    count,
    setCount,
  }));

  return (
    <>
      <div id="count">count: {count}</div>
    </>
  );
});

export default Son;
