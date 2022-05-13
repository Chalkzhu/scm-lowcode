import React, { useEffect } from 'react'
import { observer } from "mobx-react-lite";
import Layout from '@/layout';
import Generator from '@/pages';
import useStore from '@/store';

const defaultValue = {
  displayType: 'row',
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url输入框',
      widget: 'input',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email输入框',
      widget: 'input',
      type: 'string',
      format: 'email',
    },
  }
};

const App = () => {
  const globalStore = useStore();

  useEffect(() => {
    globalStore.initInstance(defaultValue);
  }, [])

  return (
    <Layout>
      {/* 表单设计器 */}
      <Generator />
    </Layout>
  );
}

export default observer(App);
