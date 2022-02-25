import React, { useMemo, useState } from "react";

function observer(initData, cb) {
  const data = new Proxy(initData, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === "object" ? observer(res, cb) : res;
    },
    set(target, key, value) {
      console.log(arguments);
      cb();
      return Reflect.set(target, key, value);
    },
  });

  return data;
}

function useReactive(initialState) {
  const [observerState, setObserverState] = useState(initialState);

  let state = useMemo(() => {
    return observer(observerState, () => {
      let s = { ...state };
      // console.log(s);
      setObserverState(s);
    });
  }, []);

  return state;
}

const Index = () => {
  const data = useReactive({
    name: "tom",
    age: 18,
    like: {
      sports: "足球",
      score: 80,
    },
  });

  function change() {
    data.like.score++;
    setTimeout(() => {
      data.like.score++;
    }, 1000);
  }

  return (
    <>
      <button onClick={change}>change</button>
      <br />
      {data.name}
      <br />
      {data.age}
      <br />
      {data.like.score}
    </>
  );
};

export default Index;
