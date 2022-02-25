import React from "react";
import { LayerAlpha, LayerBeta } from "./son";
import { counterStore } from "./store";

const Index = () => {
  return (
    <>
      <button onClick={counterStore.inAlpha}>alpha</button>
      <button onClick={counterStore.inBeta}>beta</button>
      <LayerAlpha />
      <LayerBeta />
    </>
  );
};

export default Index;
