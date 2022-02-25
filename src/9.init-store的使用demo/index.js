import React from "react";
import initStore from "init-store";
import { LayerAlpha, LayerBeta } from "./son";

export const { Context, Provider } = initStore();

const Index = () => {
  const [store, setStore] = React.useState({
    alpha: 1,
    beta: 2,
  });

  return (
    <Provider value={{ store, setStore }}>
      <button onClick={() => setStore({ ...store, alpha: ++store.alpha })}>
        alpha
      </button>
      <button onClick={() => setStore({ ...store, beta: ++store.beta })}>
        beta
      </button>

      <LayerAlpha />
      <LayerBeta />
    </Provider>
  );
};

export default Index;
