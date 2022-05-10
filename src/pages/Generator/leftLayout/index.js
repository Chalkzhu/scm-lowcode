import React from 'react';
import { observer } from "mobx-react-lite";
import { DragOverlay } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import useStore from '@/store';
import DragItem from './dragItem';

const LeftLayout = () => {
  const globalStore = useStore();

  return (
    <>
      <div className="left_layout">
        {
          globalStore.components.map(v => (
            <div key={v.id} className="group">
              <div className="group_title">{v.title}</div>
              <div className="group_list">
                {v.enum.map(child => (
                  <div key={child.type} className="group_item_wrap">
                    <DragItem id={child.type} {...child} />
                  </div>
                ))}
              </div>
            </div>
          ))
        }
        <DragOverlay modifiers={[restrictToWindowEdges]}>
          <div className="group_item_wrap">
            <div className="group_item">
              <span>{globalStore.activeData.label}</span>
            </div>
          </div>
        </DragOverlay>
      </div>
    </>
  )
};

export default observer(LeftLayout);
