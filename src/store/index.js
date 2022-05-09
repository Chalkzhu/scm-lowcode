import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";

class GlobalStore {
  count = 0;
  defaultValue = {}; // 默认展示的数据

  constructor() {
    makeAutoObservable(this)
  };

  increaseTimer() {
    this.count += 1
  }
};

const Context = createContext(new GlobalStore());
const useStore = () => useContext(Context);
export default useStore;
