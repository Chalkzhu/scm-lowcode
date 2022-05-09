import React from 'react'
import { observer } from "mobx-react-lite";
import Layout from '@/layout';
import Generator from '@/pages';

const App = () => {
  return (
    <Layout>
      {/* 表单设计器 */}
      <Generator />
    </Layout>
  );
}

export default observer(App);
