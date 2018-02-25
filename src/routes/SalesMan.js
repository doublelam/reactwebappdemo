import React, { createClass, PropTypes } from "react";
import { connect } from "dva";
import classNames from "./SalesMan.less";
import ModalView from "../components/Salesman/ModalView";
import {
  Input,
  Row,
  Col,
  Button,
  TreeSelect,
  Table,
  Modal
} from "antd";
import convertsTreeSelect, { newTree } from "../utils/convertsTreeSelect";
import coreEvents from "cc-core-events";


const TreeNode = TreeSelect.TreeNode;

function onSalesNameChange(e, dispatch) {
  dispatch({
    type: "salesMan/save",
    payload: {
      salesmanName: e.target.value || ""
    }
  })
}

function onTreeSelectChange(value, dispatch, regionType) {
  console.log('regionTYpe',regionType)
  let params = {
    region: '',
    wayPort: ''
  };

  // 公路港
  if (regionType.regionArr.indexOf(value) !== -1) {
    params.region = value;
    params.wayPort = ''
    // 大区
  } else if (regionType.wayportArr.indexOf(value) !== -1) {
    params.region = '';
    params.wayPort = value
  }
  console.log('params',params);
  dispatch({
    type: "salesMan/save",
    payload: {
      ...params,
      treeSelectedValue: value
    }
  });
}

function onSearch(params, dispatch, isSearchBtn) {
  params.pageNum = isSearchBtn ? 1 : params.pageNum;
  dispatch({
    type: "salesMan/search",
    payload: {
      params
    }
  });
}

function onDel(item, i, dispatch, searchParams) {
  log("onDel item", item);
  dispatch({
    type: "salesMan/del",
    payload: {
      params: {
        // TODO salesmansId is id defined at ajax.list of salesMan in services
        salesmansId: item.id
      },
      index: i,
      searchParams
    }
  });
}

function convertsDataSource(dataSource, dispatch, searchParams) {
  return dataSource.map((item, i) => {
    item.op = (
      <div className={classNames.op}>
        <Button
          type={"primary"}
          onClick={
            () => {
              Modal.confirm({
                title: '是否确认删除',
                onOk() {
                  onDel(item, i, dispatch, searchParams);
                }
              });;

            }
          }
          style={{ marginLeft: 5, marginRight: 5 }}
        >
          删除
        </Button>
        <Button
          type={"primary"}
          onClick={() => onEdit(item, i, dispatch)}
          style={{ marginLeft: 5, marginRight: 5 }}
        >
          编辑
        </Button>
      </div>
    );
    return item;
  })
}

function onAddOne(dispatch) {
  log("onAddOne");

  coreEvents.emit("salesManModalView:show", {
    renderData: {
      index: -1,
      item: {
        jobNumber: '',
        name: '',
        cellPhone: '',
        region: '',
        roadPort: '',
        note: '',
      },
      type: "add"
    }
  });
}

function onEdit(item, i, dispatch) {
  log("onEdit");

  coreEvents.emit("salesManModalView:show", {
    renderData: {
      index: i,
      item: { ...item },
      type: "edit"
    }
  });
}

function SalesMan({
  dispatch,
  treeSelect,
  treeSelectedValue,
  region,
  wayPort,
  salesmanName,
  dataSource,
  columns,
  pagination,
}) {

  const searchParams = {
    region,
    wayPort,
    salesmanName,
    pageNum: pagination.current,
    pageSize: pagination.pageSize
  };

  pagination = {
    ...pagination,
    onChange: (page) => {
      onSearch(
        {
          ...searchParams,
          pageNum: page
        },
        dispatch,
        false,
      );
    }
  };

  dataSource = convertsDataSource(dataSource, dispatch, searchParams);

  return (
    <section className={classNames.section} style={{
      backgroundColor: '#fff',
      paddingTop: 10

    }}>
      <div className={classNames.search} style={{
        padding: '10px 10px',
        backgroundColor: '#f1f1f1',
        margin: '10px 20px'
      }}>
        <Row>
          <Col span={6}>
            <div className={classNames.flexStart}>
              <span className={classNames.text}>姓名: </span>
              <Input
                style={{ width: "60%" }}
                value={salesmanName}
                onChange={(value) => onSalesNameChange(value, dispatch)}
              />
            </div>
          </Col>
          <Col span={6}>
            <div className={classNames.flexStart}>
              <span className={classNames.text}>组织: </span>
              {newTree(treeSelect, treeSelectedValue, onTreeSelectChange, dispatch)}
            </div>
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={() => onSearch({ ...searchParams }, dispatch, true)}>查询</Button>
          </Col>
        </Row>
      </div>
      <div className={classNames.addOne}>
        <Button type="primary" onClick={() => onAddOne(dispatch)}>添加业务员</Button>
      </div>
      <div className={classNames.table}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
        />
      </div>
      <ModalView />
    </section>
  );
}

SalesMan.propTypes = {};

export default connect(({
  salesMan
}) => ({
    ...salesMan
  }))(SalesMan);
