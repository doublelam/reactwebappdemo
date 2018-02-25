import React from "react";
import { TreeSelect } from "antd";
import { ObjOperate } from '../utils/objOperate';
const { TreeNode } = TreeSelect;

export default function convertsTreeSelect(
  tree,
  region,
  onTreeSelectChange,
  dispatch,
  style
) {
  console.log('gget tree', tree);
  if (!tree) {
    return (
      <TreeSelect
        showSearch
        style={{ ...style, width: 100 }}
        value={""}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="请选择哦"
        allowClear
        treeDefaultExpandAll
        onChange={() => { }}
      >
      </TreeSelect>
    );
  }

  let ret;

  style = style || { width: "60%" }

  if (!Array.isArray(tree)) {
    ret = (
      <TreeSelect
        showSearch
        style={style}
        value={region}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="请选择哦"
        allowClear
        treeDefaultExpandAll
        onChange={(e) => onTreeSelectChange(e, dispatch, tree)}
      >
        <TreeNode
          value={tree.unitName}
          title={tree.unitName + 'test'}
          key={tree.key}
        >
          {convertsTreeSelect(tree.childrenList)}
        </TreeNode>
      </TreeSelect>
    );
  } else {
    ret = [];
    let node;
    for (let i = 0, ii = tree.length; i < ii; i++) {
      node = tree[i];
      if (node.childrenList) {
        ret.push(
          <TreeNode
            value={node.unitName}
            title={node.unitName}
            key={node.key}
          >
            {convertsTreeSelect(node.childrenList)}
          </TreeNode>
        );
      } else {
        ret.push(
          <TreeNode
            value={node.unitName}
            title={node.unitName}
            key={node.key}
          />
        );
      }
    }
  }

  return ret;
}

export function newTree(
  tree,
  region,
  onTreeSelectChange,
  dispatch,
  style) {
  console.log('trrre', tree);
  let _this = {
    regionArr: [],
    wayportArr: []
  };
  function resetKey(arrayData) {
    let newArr = ObjOperate.copyArr(arrayData);
    for (let item of newArr) {
      console.log('level', item);
      if (item.unitLevel === '3') {
        _this.wayportArr.push(item.unitName);
      }
      if (item.unitLevel === '2') {
        _this.regionArr.push(item.unitName);
      }
      item.key = item.aclUnitId;
      item.value = item.unitName;
      item.label = item.unitName;
      if (item.childrenList) {
        item.children = resetKey(item.childrenList);
      }
    }
    return newArr;
  }
  console.log('waypoerino', _this);
  return (
    <TreeSelect
      treeData={resetKey(tree)}
      showSearch
      allowClear
      value={region}
      showCheckedStrategy="SHOW_CHILD"
      onChange={(val) => onTreeSelectChange(val, dispatch, _this)}
      style={{
        width: '100%',
        maxWidth: 200
      }}
    />
  );
}