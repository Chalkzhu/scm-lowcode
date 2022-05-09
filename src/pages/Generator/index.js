import React from 'react';
import LeftLayout from './leftLayout';
import MidLayout from './midLayout';
import RightLayout from './rightLayout';
import './styles.less';

const Generator = () => {
  return (
    <>
      <div className="generator_container">
        <LeftLayout />

        <MidLayout />

        <RightLayout />
      </div>
    </>
  );
};

export default Generator;
