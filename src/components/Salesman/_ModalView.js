import React, {createClass, PropTypes} from "react";
import {connect} from "dva";
import classNames from "./ModalView.less";
import {
  Input,
  Row,
  Col,
  Button,
  TreeSelect,
  Modal
} from "antd";

import convertsTreeSelect from "../../utils/convertsTreeSelect";

const InputGroup = Input.Group;

const ModalView = createClass({
  getInitialState() {
    return {
      renderData: null,
      region: "",
      notValid: false,
    }
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.props.visible && !this.state.treeSelect) {
      this.props.dispatch({
        type: "salesManModalView/fetchTreeSelect",
        payload: {
          params: {}
        }
      });
    }
  },

  onInputChange(attr, value) {
    let data = this.state.renderData;
    data.item[attr] = value;

    this.setState({
      renderData: {...data},
      notValid: false
    });
  },

  onTreeSelectChange(value) {
    log("onTreeSelectChange", value);
    this.setState({
      region: value,
      notValid: false
    });
  },

  onOk() {
    log("handleModalOk");

    if (!this.isValid()) {
      this.setState({
        notValid: true
      });
      return;
    }

    this.props.onModalClose();
  },

  onCancel() {
    log("handleModalCancel");

    this.props.onModalClose();
  },

  isValid() {
    const {renderData} = this.state;
    const {item} = renderData;

    if ( item.name === ""
      || item.jobNumber === ""
    ) {
      return false;
    }

    return true;
  },

  getModalBody() {
    const {treeSelect, region, renderData, notValid} = this.state;
    if (!renderData) {
      return null;
    }

    const {item} = renderData;

    const treeView = convertsTreeSelect(
      treeSelect,
      region,
      this.onTreeSelectChange,
      null,
      { width: "50%", borderRadius: 4 }
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
                  style={{width: '50%'}}
                  value={item.jobNumber}
                  onChange={(e) => this.onInputChange("jobNumber", e.target.value)}
                />
                <span style={{ width: "20%", color: "red", display: "inline-block", "paddingLeft": 5}}>
                  {!notValid ? null : item.jobNumber === "" ? "必填" : null}
                </span>
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>
                  <span className={classNames.star}>*</span>姓名:
                </span>
                <Input
                  style={{width: '50%'}}
                  value={item.name}
                  onChange={(e) => this.onInputChange("name", e.target.value)}
                />
                <span style={{ width: "20%", color: "red", display: "inline-block", "paddingLeft": 5}}>
                  {!notValid ? null : item.name === "" ? "必填" : null}
                </span>
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>手机号: </span>
                <Input
                  style={{width: '50%'}}
                  value={item.cellPhone}
                  onChange={(e) => this.onInputChange("cellPhone", e.target.value)}
                />
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>备注: </span>
                <Input
                  style={{width: '50%'}}
                  value={item.note}
                  onChange={(e) => this.onInputChange("note", e.target.value)}
                />
              </InputGroup>
            </div>
            <div className={classNames.formItem}>
              <InputGroup compact>
                <span style={textStyle}>所属组织: </span>
                {treeView}
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    );
  },

  afterClose() {
    log("afterClose visible", this.props.visible);

    this.setState({
      renderData: null,
      region: "",
      treeSelect: null,
      notValid: false,
    });
  },

  render() {
    const {
      dispatch,
      visible, // => parent component
      title, // => self state
      confirmLoading // => self state
    } = this.props;

    console.log("modal render visible", visible);

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

