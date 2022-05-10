import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const DragItem = ({ id, label, type }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: `drag${id}`, data: { label, type } });

  const style = { transform: CSS.Transform.toString(transform) };

  return (
    <>
      <div ref={setNodeRef} {...attributes} {...listeners} className="group_item">
        <span>{label}</span>
      </div>
      {/* <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="group_item">
      <span>{label}</span>
    </div> */}
    </>
  );
};

export default DragItem;
