import React from 'react';
import { observer } from "mobx-react-lite";
import { useDraggable } from '@dnd-kit/core';

const DragItem = ({ id, label, type }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id: `drag${id}`, data: { label, type } });

  return (
    <>
      <div ref={setNodeRef} {...attributes} {...listeners} className="group_item">
        <span>{label}</span>
      </div>
    </>
  );
};

export default observer(DragItem);
