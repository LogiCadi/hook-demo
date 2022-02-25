import React, { useMemo } from "react";
import { Context } from "./index";
import { useObserver } from "mobx-react";
import { counterStore } from "./store";

export function LayerAlpha() {
  return useObserver(() => (
    <div>
      LayerAlpha {counterStore.alpha}
      {console.log("LayerAlpha Render")}
    </div>
  ));
}

export function LayerBeta() {
  return useObserver(() => (
    <div>
      LayerBeta {counterStore.beta}
      {console.log("LayerBeta Render")}
    </div>
  ));
}
