import React from 'react';
import { observer } from "mobx-react-lite";
import useStore from '@/store';
import DragItem from './dragItem';

const LeftLayout = () => {
  const globalStore = useStore();

  return (
    <>
      <div className="left_layout">
        {globalStore.components.map(v => (
          <div key={v.id} className="group">
            <div className="group_title">{v.title}</div>
            <div className="group_list">
              {v.enum?.map(child => (
                <div key={child.widget} className="group_item_wrap">
                  <DragItem id={child.widget} {...child} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default observer(LeftLayout);
