import React from 'react';
import SortableBox from './sortableBox';

const MidLayout = () => {

  return (
    <>
      <div className="mid_layout">
        <div className="mid_layout_header">
          <div className="mid_layout_header_title">表单设计</div>
          <div className="mid_layout_header_matrix">
            快速排列
          </div>
        </div>

        {/* 可拖拽区域 */}
        <div className="mid_layout_dnd">
          <SortableBox />
        </div>
      </div>
    </>
  )
};

export default MidLayout;
