import React, { createClass, PropTypes } from "react";
import { connect } from "dva";
import classNames from "./ModalView.less";
import {
  Input,
  Row,
  Col,
  Button,
  TreeSelect,
  Modal,
  message
} from "antd";
import convertsTreeSelect, { newTree } from "../../utils/convertsTreeSelect";
import coreEvents from "cc-core-events";

const InputGroup = Input.Group;

const ModalView = createClass({
  componentDidMount() {
    coreEvents.on("salesManModalView:show", this.onShow);
  },

  componentWillUnmount() {
    coreEvents.removeAllListeners("salesManModalView:show");
  },

  onShow(opts) {
    this.props.dispatch({
      type: "salesManModalView/fetchTreeSelect",
      payload: {
        params: {}
      }
    });
    console.log('onshow',opts);
    this.props.dispatch({
      type: "salesManModalView/save",
      payload: {
        renderData: opts.renderData,
        visible: true,
        region: opts.renderData.item.roadPort || "",
      }
    });
  },

  onInputChange(attr, value) {
    log("onInputChange", value);

    const { dispatch, renderData } = this.props;
    renderData.item[attr] = value;

    dispatch({
      type: "salesManModalView/save",
      payload: {
        renderData: { ...renderData },
        notValid: false
      }
    });
  },

  onTreeSelectChange(value) {
    log("onTreeSelectChange", value);
    const { dispatch, treeSelect } = this.props;
    if (!value) {
      dispatch({
        type: "salesManModalView/save",
        payload: {
          region: "",
          notValid: false,
        }
      });
      return;
    }

    if (String(value).indexOf('大区') !== -1 ||
      String(value).indexOf('集团') !== -1
    ) {
      message.warn("请选择公路港");
      dispatch({
        type: "salesManModalView/save",
        payload: {
          region: "",
          notValid: false,
        }
      });
      return;
    }

    dispatch({
      type: "salesManModalView/save",
      payload: {
        region: value,
        notValid: false,
      }
    });
  },

  onOk() {
    log("handleModalOk");

    const { dispatch, renderData, treeSelect, region } = this.props;

    if (!this.isValid()) {
      dispatch({
        type: "salesManModalView/save",
        payload: {
          notValid: true,
        }
      });
      return;
    }
    function getRegion(val, treeSelect) {
      console.log('treeSelect', treeSelect);
      for (let item of treeSelect) {
        for (let inItem of item.children) {
          if (val === inItem.label) {
            return item.label;
          }
        }
      }
    }
    console.log('value', region);
    console.log('is rigion',String(region).indexOf('大区') !== -1);
    if (String(region).indexOf('大区') !== -1 ||
      String(region).indexOf('集团') !== -1) {
      message.warn("该公路港不在数据列表中，请重新选择！");
      return;
    }

    const { item, type } = renderData;

    // wayPort, region
    let address = { 
      wayPort: region,
      region: getRegion(region, treeSelect),
     };
     let params = {...address};
    // would be passed to the table
    item.roadPort = address.wayPort;
    item.region = address.region;

    params = {
      ...params,
      salesmanName: item.name,
      salesmanNumber: item.jobNumber,
      phoneNumber: item.cellPhone,
      description: item.note
    };

    // type: add, no id
    if (type === "edit") {
      params.salesmansId = item.id;
    }

    if (type === "edit") {
      dispatch({
        type: "salesManModalView/edit",
        payload: {
          params
        }
      });
    } else if (type === "add") {
      dispatch({
        type: "salesManModalView/add",
        payload: {
          params
        }
      });
    }

    dispatch({
      type: "salesManModalView/save",
      payload: {
        confirmLoading: true
      }
    });
  },

  onCancel() {
    log("handleModalCancel");

    const { dispatch } = this.props;

    dispatch({
      type: "salesManModalView/save",
      payload: {
        notValid: false,
        visible: false
      }
    });
  },

  isValid() {
    const { renderData, region } = this.props;
    const { item } = renderData;

    if (item.name.trim() === ""
      || item.jobNumber.trim() === ""
      || region === ""
      || !/^\d{11}$/.test(item.cellPhone.trim())
    ) {
      return false;
    }

    return true;
  },

  getModalBody() {
    const { treeSelect, region, renderData, notValid } = this.props;
    if (!renderData) {
      return null;
    }

    const { item } = renderData;

    const treeView = newTree(
      treeSelect,
      region,
      this.onTreeSelectChange,
      null,
      { width: "100%", borderRadius: 4 }
    );

    const textStyle = {
      width: '30%',
      display: "inline-block",
      textAlign: "right",
      paddingRight: 10
    };

    return (
      <div className={classNames.modalBody}>
        <div className={classNames.content}>
          <div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>
                  <span className={classNames.star}>*</span>工号:
                </span>
                <Input
                  style={{ width: '50%' }}
                  value={item.jobNumber}
                  onChange={(e) => this.onInputChange("jobNumber", e.target.value)}
                />
                <span style={{ width: "20%", color: "red", display: "inline-block", "paddingLeft": 5 }}>
                  {!notValid ? null : item.jobNumber.trim() === "" ? "必填" : null}
                </span>
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>
                  <span className={classNames.star}>*</span>姓名:
                </span>
                <Input
                  style={{ width: '50%' }}
                  value={item.name}
                  onChange={(e) => this.onInputChange("name", e.target.value)}
                />
                <span style={{ width: "20%", color: "red", display: "inline-block", "paddingLeft": 5 }}>
                  {!notValid ? null : item.name.trim() === "" ? "必填" : null}
                </span>
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>
                  <span className={classNames.star}>*</span>手机号:
                </span>
                <Input
                  style={{ width: '50%' }}
                  value={item.cellPhone}
                  onChange={(e) => this.onInputChange("cellPhone", e.target.value)}
                />
                <span style={{ width: "20%", color: "red", display: "inline-block", "paddingLeft": 5 }}>
                  {!notValid ? null : !/^\d{11}$/.test(item.cellPhone.trim()) ? "格式错误" : null}
                </span>
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>备注: </span>
                <Input
                  style={{ width: '50%' }}
                  value={item.note}
                  onChange={(e) => this.onInputChange("note", e.target.value)}
                />
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>
                  <span className={classNames.star}>*</span>所属组织:
                </span>
                <span style={{ width: "50%", display: "inline-block" }}>
                  {treeView}
                </span>
                <span style={{ width: "20%", color: "red", display: "inline-block", "paddingLeft": 5 }}>
                  {!notValid ? null : region === "" ? "必选公路港" : null}
                </span>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    );
  },

  afterClose() {
    const { dispatch, ajaxDone, renderData } = this.props;

    dispatch({
      type: "salesManModalView/close"
    });

    if (ajaxDone) {
      coreEvents.emit("salesManModalView:renderData", renderData);
    }
  },

  render() {
    const {
      visible,
      title,
      confirmLoading
    } = this.props;

    const modalTitle = <h3>{title}</h3>;

    // this.props.renderData => parent component
    // this.props.treeSelect => self state
    const modalBody = this.getModalBody();

    return (
      <Modal
        title={modalTitle}
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={this.onOk}
        onCancel={this.onCancel}
        afterClose={this.afterClose}
        maskClosable={false}
      >
        {modalBody}
      </Modal>
    );
  }
});

ModalView.propTypes = {};

export default connect(({
  salesManModalView
}) => ({
    ...salesManModalView
  }))(ModalView);

