import React from 'react';
import { observer } from "mobx-react-lite";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './sortableItem';
import useStore from '@/store';

const SortableBox = () => {
  const globalStore = useStore();

  // 遍历子结构
  const Control = (arr) => {
    return arr?.map(v => {
      if (v.type === 'object' && v.children) {
        return Control(v.children);
      }
      return <SortableItem key={v.name} {...v} />;
    })
  };

  return (
    <>
      {/* 可排序拖拽 */}
      <SortableContext
        items={globalStore.previewFields.children.map(v => v.name)}
        strategy={verticalListSortingStrategy}
      >
        {Control(globalStore.previewFields.children)}
      </SortableContext>
    </>
  )
};

export default observer(SortableBox);
