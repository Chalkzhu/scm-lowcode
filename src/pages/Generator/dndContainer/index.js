import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import useStore from '@/store';

// 可拖拽容器
const DndContainer = ({ children }) => {
  const globalStore = useStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    globalStore.changeActiveData(event.active.data.current);
  };

  const handleDragEnd = (event) => {
    console.log('handleDragEnd:', event);
    const { active, over } = event;

    if (active.id.includes('drag')) {
      const cloneArr = [...globalStore.groupKeys];
      const index = globalStore.groupKeys.findIndex(v => v === over.id);
      // 使用唯一id
      cloneArr.splice(index + 1, 0, `${active.id.split('drag')[1]}${nanoid(11)}`);
      globalStore.updateGroupArray(cloneArr);
    } else if (active.id !== over.id) {
      const oldItems = globalStore.groupKeys;

      const oldIndex = oldItems.indexOf(active.id);
      const newIndex = oldItems.indexOf(over.id);
      globalStore.moveGroupArray(arrayMove(oldItems, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      autoScroll={false}
    // modifiers={[restrictToParentElement]}
    >
      {children}
    </DndContext>
  );
};

export default DndContainer;
