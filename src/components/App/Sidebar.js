import React, {createClass, PropTypes} from 'react';
import {Link} from "dva/router";
import {Menu, Icon} from "antd";
import classNames from "./Sidebar.less";

const {SubMenu, Item, ItemGroup} = Menu;

function SubMenuTitle({
  iconType,
  text
}) {
  return (
    <span className={classNames.subMenuTitle}>
      <Icon type={iconType}/>
      <span>{text}</span>
    </span>
  );
}

const Sidebar = (props) => {
  return (
    <div className={classNames.sidebar}>
      <div className={classNames.menuHeader}>
        <div className={classNames.menuLogo}>
          <h3 className={classNames.menuLogoText}>Boss</h3>
          <h2>运营平台</h2>
        </div>
        <h3 className={classNames.menuTitleSection}>
          <span>
            <Icon type="mail"/>
            <span className={classNames.menuTitleSectionText}>运营平台</span>
          </span>
        </h3>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={["0"]}
        selectedKeys={["0-0"]}
      >
        <SubMenu
          key="0"
          title={<SubMenuTitle iconType={"bars"} text={"权限管理"}/>}
        >
          <Item key="0-0"><Link to="/">业务员管理</Link></Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
