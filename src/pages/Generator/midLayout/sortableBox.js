import React from 'react';
import { observer } from "mobx-react-lite";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './sortableItem';
import useStore from '@/store';

const SortableBox = () => {
  const globalStore = useStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log('SortHandleDragEnd', event);

    if (active.id !== over.id) {
      const oldItems = globalStore.groupKeys;

      const oldIndex = oldItems.indexOf(active.id);
      const newIndex = oldItems.indexOf(over.id);
      globalStore.moveGroupArray(arrayMove(oldItems, oldIndex, newIndex));
    }
  }

  return (
    <>
      {/* <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      > */}
        {/* 可排序拖拽 */}
        <SortableContext
          items={globalStore.groupKeys}
          strategy={verticalListSortingStrategy}
        >
          {globalStore.groupKeys.map(v => <SortableItem key={v} id={v} />)}
        </SortableContext>
      {/* </DndContext> */}
    </>
  )
};

export default observer(SortableBox);
