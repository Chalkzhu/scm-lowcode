import React from 'react';
import { Button } from 'antd';

const Header = () => {

  // eslint-disable-next-line no-unused-vars
  const handleToggle = (second) => {};

  return (
    <header>
      <div></div>
      <div className="header_toggle">
        <div className="header_toggle_pane active">编辑字段</div>
        <div className="header_toggle_pane">列表设计</div>
      </div>
      <div className="header_operate">
        <Button>清空</Button>
        <Button>预览</Button>
        <Button type="primary">保存</Button>
      </div>
    </header>
  )
};

export default Header;
