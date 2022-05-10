import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Input } from 'antd';

const Controls = {
  input: <Input />,
};

const SortableItem = ({ id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable_item">
      {/* ... */}
      {Controls[id] ? Controls[id] : <Input placeholder={id} />}
    </div>
  );
};

export default SortableItem;
