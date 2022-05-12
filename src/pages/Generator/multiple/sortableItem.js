import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import {
  AnimateLayoutChanges,
  SortableContext,
  useSortable,
  arrayMove,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
  SortingStrategy,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

const getColor = (id) => {
  switch (id[0]) {
    case 'A':
      return '#7193f1';
    case 'B':
      return '#ffda6c';
    case 'C':
      return '#00bcd4';
    case 'D':
      return '#ef769f';
    default:
      return undefined
  }
}

const useMountStatus = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);

    return () => clearTimeout(timeout);
  }, []);

  return isMounted;
}


export const Item = React.memo(
  React.forwardRef(({
    color,
    dragOverlay,
    dragging,
    disabled,
    fadeIn,
    handle,
    height,
    index,
    listeners,
    onRemove,
    renderItem,
    sorting,
    style,
    transition,
    transform,
    value,
    wrapperStyle,
    ...props
  }, ref) => {
    useEffect(() => {
      if (!dragOverlay) {
        return;
      }

      document.body.style.cursor = 'grabbing';

      return () => {
        document.body.style.cursor = '';
      };
    }, [dragOverlay]);

    return renderItem ? (
      renderItem({
        dragOverlay: Boolean(dragOverlay),
        dragging: Boolean(dragging),
        sorting: Boolean(sorting),
        index,
        fadeIn: Boolean(fadeIn),
        listeners,
        ref,
        style,
        transform,
        transition,
        value,
      })
    ) : (
      <li style={{
        ...wrapperStyle,
        transition: [transition, wrapperStyle?.transition]
          .filter(Boolean)
          .join(', '),
        '--translate-x': transform
          ? `${Math.round(transform.x)}px`
          : undefined,
        '--translate-y': transform
          ? `${Math.round(transform.y)}px`
          : undefined,
        '--scale-x': transform?.scaleX
          ? `${transform.scaleX}`
          : undefined,
        '--scale-y': transform?.scaleY
          ? `${transform.scaleY}`
          : undefined,
        '--index': index,
        '--color': color,
      }}
        ref={ref}
      >
        <div
          style={style}
          data-cypress="draggable-item"
          {...(!handle ? listeners : undefined)}
          {...props}
          tabIndex={!handle ? 0 : undefined}
        >
          {value}
        </div>
      </li>
    );
  }
  )
);

const SortableItem = ({
  disabled,
  id,
  index,
  handle,
  renderItem,
  style,
  containerId,
  getIndex,
  wrapperStyle,
}) => {
  const {
    setNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({ id });
  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      index={index}
      wrapperStyle={wrapperStyle({ index })}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId,
      })}
      color={getColor(id)}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      renderItem={renderItem}
    />
  );
}

export default SortableItem;
