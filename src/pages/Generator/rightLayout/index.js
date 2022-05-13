import React, {useMemo} from 'react';
import { observer } from "mobx-react-lite";
import useStore from '@/store';
import ControlConfig from './components';

const RightLayout = () => {
  const globalStore = useStore();

  // 选中的控件属性
  const activeControl = useMemo(() => {
    const activeId = globalStore.activeData.id;
    return globalStore.previewFields.children.find(v => v.name === activeId);
  }, [globalStore.activeData.id, globalStore.previewFields.children]);

  return (
    <>
      <div className="right_layout">
        <div className="right_layout_header">
          组件属性
        </div>
        <div className="right_layout_body">
          <ControlConfig initialValues={activeControl} />
        </div>
      </div>
    </>
  );
};

export default observer(RightLayout);
