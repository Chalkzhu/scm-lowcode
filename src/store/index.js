import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { transformer } from '@/utils';

class GlobalStore {
  count = 0;
  components = [
    {
      id: 'base', title: '基础组件', enum: [
        { title: '输入框', widget: 'input' },
        { title: '计数器', widget: 'number' },
      ]
    },
    {
      id: 'complex', title: '高级组件', enum: [
        { title: '子表单', widget: 'form' },
        { title: '计算公式', widget: 'formula' }
      ]
    }
  ];

  // 默认接收的数据
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

  // 使用时的数据结构
  previewFields = {
    displayType: 'row',
    labelWidth: 130,
    type: 'object',
    children: [
      {
        name: 'url',
        widget: 'input',
        title: 'url输入框',
        default: 'www',
        placeholder: 'www',
        type: 'string',
        format: 'url',
        required: true,
      },
      {
        name: 'email',
        widget: 'input',
        title: 'email输入框',
        type: 'string',
        format: 'email',
      },
    ]
  };

  activeData = {
    id: 'url',
    dndPosition: "center",
    widget: "input",
  }; // 当前选中的拖拽元素数据

  constructor() {
    makeAutoObservable(this)
  };

  increaseTimer() {
    this.count += 1;
  }

  // 初始化
  initInstance(defaultValue) {
    this.defaultValue = defaultValue;
    this.previewFields = transformer(defaultValue);
  }

  updateGroupArray(data) { // 更新
    this.previewFields = {...this.previewFields, children: data };
  }

  changeActiveData(data) {
    this.activeData = data;
  }

};

const Context = createContext(new GlobalStore());
const useStore = () => useContext(Context);
export default useStore;
