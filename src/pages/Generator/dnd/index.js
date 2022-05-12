import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  MeasuringStrategy,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';

function App() {
  const [items, setItems] = useState(['1', '2', '3']);
  const [items2, setItems2] = useState(['a', 'b', 'c']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log('event', event)

    if (['a', 'b', 'c'].includes(active.id) && !over.data.current.sortable.items.includes(active.id)) {
      setItems((old) => {
        const index = old.findIndex(v => v === over.id);
        // 使用唯一id
        old.splice(index + 1, 0, `${active.id}`);
        console.log('old', old);
        return [...old];
      })
    }

    // if (active.id !== over.id) {
    //   setItems((items) => {
    //     const oldIndex = items.indexOf(active.id);
    //     const newIndex = items.indexOf(over.id);

    //     return arrayMove(items, oldIndex, newIndex);
    //   });
    // }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      autoScroll={false}
    >
      <div>==================== 分割线 ====================</div>
      <hr />
      <div>使用Set更新会有动效</div>
      <hr />
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map(id => <SortableItem key={id} id={id} />)}
      </SortableContext>
      <hr />
      <SortableContext
        items={items2}
        strategy={verticalListSortingStrategy}
      >
        {items2.map(id => <SortableItem key={id} id={id} />)}
      </SortableContext>
      <DragOverlay>
        正在拖拽
      </DragOverlay>
    </DndContext>
  );
};

export default App;
