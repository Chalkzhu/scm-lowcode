import React from 'react';
import { observer } from "mobx-react-lite";
import { nanoid } from 'nanoid'
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import useStore from '@/store';
import Item from '../components/item';

// 可拖拽容器
const DndContainer = ({ children }) => {
  const [isDragging, setIsDragging] = React.useState(false); // 是否拖拽中
  const globalStore = useStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // 开始拖拽
  const handleDragStart = ({ active }) => {
    setIsDragging(true);
    globalStore.changeActiveData({id: active.id,...active.data.current});
  };

  // 拖拽中
  const handleDragOver = ({ active, over }) => {
    // if (over) {
    //   globalStore.changeActiveData({ ...active.data.current, dndPosition: 'center' });
    // }
    // if (active.id.includes('drag')) {
    //   const cloneArr = [...globalStore.groupKeys];
    //   const index = globalStore.groupKeys.findIndex(v => v === over.id);
    //   // 使用唯一id
    //   cloneArr.splice(index + 1, 0, `${active.id.split('drag')[1]}${nanoid(11)}`);
    //   globalStore.updateGroupArray(cloneArr);
    // } else if (active.id !== over.id) {
    //   const oldItems = globalStore.groupKeys;

    //   const oldIndex = oldItems.indexOf(active.id);
    //   const newIndex = oldItems.indexOf(over.id);
    //   globalStore.moveGroupArray(arrayMove(oldItems, oldIndex, newIndex));
    // }
  };

  // 拖拽结束
  const handleDragEnd = (event) => {
    console.log('handleDragEnd:', event);
    const { active, over, delta } = event;

    // 新增组件时的默认数据结构: object
    function addObj() {
      return { name: `${active.id}${nanoid(11)}`, widget: active.id, title: active.data.current.title }
    };

    // 未移入时触发
    if (!over?.id) {
      if (!delta.x && !delta.y) { // 仅点击, 未移动
        const cloneArr = [...globalStore.previewFields.children, addObj(active.id)]
        globalStore.updateGroupArray(cloneArr);
      }
      setIsDragging(false);
      return;
    }

    // 更新数据
    if (active.data.current?.dndPosition === 'left') {
      const cloneArr = [...globalStore.previewFields.children];
      const index = cloneArr.findIndex(v => v.name === over.id);
      // 使用唯一id
      cloneArr.splice(index + 1, 0, addObj(active.id));
      globalStore.updateGroupArray(cloneArr);
    } else if (active.id !== over.id) {
      const oldItems = [...globalStore.previewFields.children];

      const oldIndex = oldItems.findIndex(v => v.name === active.id);
      const newIndex = oldItems.findIndex(v => v.name === over.id);
      globalStore.updateGroupArray(arrayMove(oldItems, oldIndex, newIndex));
    }

    setIsDragging(false);
  };

  return (
    <DndContext
      sensors={sensors}
      // collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      autoScroll={false}
    // modifiers={[restrictToParentElement]}
    >
      {children}

      {/* 拖动时的样式 */}
      <DragOverlay dropAnimation={null} modifiers={[restrictToWindowEdges]}>
        {isDragging && (
          globalStore.activeData.dndPosition === 'center' ? <Item /> : (
            <div className="drag_overlay">
              <span>{globalStore.activeData?.label}</span>
            </div>
          )
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default observer(DndContainer);
