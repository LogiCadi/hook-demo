import React, { useMemo } from "react";
import { Context } from "./index";

export function LayerAlpha() {
  const { store, setStore } = React.useContext(Context);

  return useMemo(
    () => (
      <div>
        LayerAlpha {store.alpha}
        {console.log("LayerAlpha Render")}
      </div>
    ),
    [store.alpha]
  );
}

export function LayerBeta() {
  const { store, setStore } = React.useContext(Context);

  return (
    <div>
      LayerBeta {store.beta}
      {console.log("LayerBeta Render")}
    </div>
  );
}
