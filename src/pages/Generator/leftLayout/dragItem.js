import React from 'react';
import { observer } from "mobx-react-lite";
import { useDraggable } from '@dnd-kit/core';

const DragItem = ({ id, title, widget }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id, data: { title, widget, dndPosition: 'left' } });

  return (
    <>
      <div ref={setNodeRef} {...attributes} {...listeners} className="group_item">
        <span>{title}</span>
      </div>
    </>
  );
};

export default observer(DragItem);
