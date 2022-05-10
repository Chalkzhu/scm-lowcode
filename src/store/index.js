import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";

class GlobalStore {
  count = 0;
  components = [
    {
      id: 'base', title: '基础组件', enum: [
        { label: '输入框', type: 'input' },
        { label: '计数器', type: 'number' },
      ]
    },
    {
      id: 'complex', title: '高级组件', enum: [
        { label: '子表单', type: 'form' },
        { label: '计算公式', type: 'formula' }
      ]
    }
  ];

  // 默认展示的数据
  defaultValue = {
    displayType: 'row',
    labelWidth: 130,
    type: 'object',
    properties: {
      url: {
        title: 'url输入框',
        placeholder: '//www.taobao.com',
        type: 'string',
        format: 'url',
        required: true,
      },
      email: {
        title: 'email输入框',
        type: 'string',
        format: 'email',
      },
    }
  };

  groupKeys = [];
  activeData = {}; // 当前选中的拖拽元素id

  constructor() {
    makeAutoObservable(this)
  };

  increaseTimer() {
    this.count += 1;
  }

  // 初始化
  initInstance(defaultValue) {
    this.defaultValue = defaultValue;
    this.groupKeys = Object.keys(defaultValue.properties)
  }

  moveGroupArray(data) { // 更换位置
    this.groupKeys = data;
  }

  updateGroupArray(data) { // 更新
    this.groupKeys = data;
  }

  changeActiveData(data) {
    this.activeData = data;
  }
  
};

const Context = createContext(new GlobalStore());
const useStore = () => useContext(Context);
export default useStore;
