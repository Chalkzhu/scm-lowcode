import React from 'react';
import { Form, Input, InputNumber } from 'antd';

const LmInput = ({initialValues}) => {
  const onValuesChange = (values) => {

  };

  return (
    <Form size="small" initialValues={initialValues} onValuesChange={onValuesChange}>
      <Form.Item name="title" label="控件标题">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="placeholder" label="占位提示">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="default" label="默认值">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="max" label="最大值">
        <InputNumber placeholder="请输入" />
      </Form.Item>
      <Form.Item name="min" label="最小值">
        <InputNumber placeholder="请输入" />
      </Form.Item>
    </Form>
  )
};

export default LmInput;
