import React from 'react';
import LeftLayout from './leftLayout';
import MidLayout from './midLayout';
import RightLayout from './rightLayout';
import DndContainer from './dndContainer';
import './styles.less';

const Generator = () => {
  return (
    <>
      <div className="generator_container">
        {/* 可拖住容器包裹左侧与中间区域, 用于拖拽 */}
        <DndContainer>
          <LeftLayout />

          <MidLayout />
        </DndContainer>

        <RightLayout />
      </div>
    </>
  );
};

export default Generator;
