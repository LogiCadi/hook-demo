import { makeAutoObservable } from "mobx";

// 全局state，可以在多个组件中订阅
export const counterStore = makeAutoObservable({
  // 把对象变成observable
  value: 2,
  get doubleValue() {
    // computed value
    return counterStore.value * 2;
  },
  increment() {
    counterStore.value += 1;
  },
  decrement() {
    counterStore.value -= 1;
  },

  alpha: 1,
  beta: 2,
  inAlpha() {
    ++counterStore.alpha;
  },
  inBeta() {
    ++counterStore.beta;
  },
});
