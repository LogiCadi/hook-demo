## 1 分钟了解 react hook

### useState 基础用法

```js
const Index = () => {
  // useState() 方法里面唯一的参数就是初始 state
  // 返回值为：当前 state 以及更新 state 的函数
  let [count, setCount] = useState(0);

  return (
    <>
      <div id="count">count: {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};
```

### useEffect 基础用法

```js
const Index = () => {
  let [count, setCount] = useState(0);

  // React 保证了每次运行 effect 的同时，DOM 都已经更新完毕
  useEffect(() => {
    console.log("组件初次渲染");
    return () => console.log("组件被销毁");
  }, []);

  useEffect(() => {
    console.log("组件渲染");
  });

  useEffect(() => {
    console.log("监听到 count 发生了改变，新的值为 " + count);
  }, [count]); // 仅在 count 更改时更新

  return (
    <>
      <div id="count">count: {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};
```

### props 父组件向子组件传递数据

```js
const Father = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <Son count={count} />
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

const Son = (props) => {
  return (
    <>
      <div id="count">count: {props.count}</div>
    </>
  );
};
```

### 父组件获取子组件数据

```js
const Father = () => {
  // useRef常见的用例便是命令式地访问子组件
  const sonRef = useRef();

  return (
    <>
      <Son ref={sonRef} />
      <button onClick={() => sonRef.current.setCount(sonRef.current.count + 1)}>
        click
      </button>
    </>
  );
};

const Son = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
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
```

### useContext 跨组件数据传递

```js
const Context = createContext(0);

const Father = () => {
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

const Son = () => {
  // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
  const context = useContext(Context);
  return (
    <>
      <div>count: {context}</div>
    </>
  );
};
```

### 参考链接：

[完整示例](https://github.com/LogiCadi/hook-demo)
[react 教程](https://react.docschina.org/)
