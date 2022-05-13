import React, { useMemo, forwardRef } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { Input, InputNumber } from 'antd';
import useStore from '@/store';

// 组件渲染
const Controls = ({ widget, dndPosition, ...resetProps }) => {
  console.log('resetProps', resetProps);
  switch (widget) {
    case 'input':
      return <Input {...resetProps} />;
    case 'number':
      return <InputNumber {...resetProps} />;
    default:
      return null;
  }
};

// 用来渲染组件包装
const Item = forwardRef(({ children, itemProps, ...props }, ref) => {
  const globalStore = useStore();

  // 展示的内容结构, 拖拽时与渲染时
  const itemData = useMemo(() => {
    const {sortable, ...resetItemProps} =  { ...globalStore.activeData, ...itemProps };
    return resetItemProps;
  }, [globalStore.activeData, itemProps]);

  // 是否选中
  const isActive = useMemo(() => {
    return globalStore.activeData.id === itemData.name;
  }, [globalStore.activeData.id, itemData.name]);

  return (
    <div {...props} ref={ref} className={cn('sortable_item', isActive && 'active')}>
      <div className="lm_label">
        <label>{itemData.title}</label>
      </div>
      <div className="yf_content">
        {Controls(itemData)}
      </div>
    </div>
  )
});

export default observer(Item);
