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
  const [items, setItems] = React.useState(['1', '2', '3']);
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
      const oldItems = [...globalStore.previewFields.children];

      const oldIndex = oldItems.findIndex(v => v.name === active.id);
      const newIndex = oldItems.findIndex(v => v.name === over.id);
      globalStore.updateGroupArray(arrayMove(oldItems, oldIndex, newIndex));
    }
    // if (active.id !== over.id) {
    //   setItems((items) => {
    //     const oldIndex = items.indexOf(active.id);
    //     const newIndex = items.indexOf(over.id);

    //     return arrayMove(items, oldIndex, newIndex);
    //   });
    // }
  }

  const Control = (arr) => {
    return arr?.map(v => {
      if (v.type === 'object' && v.children) {
        return Control(v.children);
      }
      return <SortableItem key={v.name} id={v.name} />;
    })
  };

  return (
    <>
      {/* <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      > */}
      {/* 可排序拖拽 */}
      <SortableContext
        items={globalStore.previewFields.children}
        strategy={verticalListSortingStrategy}
      >
        {Control(globalStore.previewFields.children)}
      </SortableContext>
      {/* </DndContext> */}
    </>
  )
};

export default observer(SortableBox);
