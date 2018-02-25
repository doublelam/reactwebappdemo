import React, { createClass, PropTypes } from 'react';
import { Link } from "dva/router";
import { Breadcrumb, Icon, Dropdown, Menu } from "antd";
import classNames from "./Header.less";
import { Notification } from './Notification';

function noop() { }

function IconItem({ iconType, text, onClick, style }) {
  return (
    <span
      className={classNames.iconItem}
      onClick={onClick || noop}
      style={style}
    >
      <Icon type={iconType} style={{ fontSize: 16 }} />
      <span className={classNames.iconItemText}>{text}</span>
    </span>
  );
}

function NavBreadcrumb({ arr, style }) {
  if (!arr) return null;
  return (
    <Breadcrumb style={style}>
      {arr.map((text, i) => {
        return <Breadcrumb.Item key={i}>{text}</Breadcrumb.Item>
      })}
    </Breadcrumb>
  );
}

export const Header = ({
  menuTextArr,
  username,
  onLogout,
  fatherHandleNav,
  rawMenu
}) => {
  let isSelf = parent === self;
  console.log('is self?', isSelf);
  console.log('header menu', rawMenu)
  if (!isSelf) {
    return <div></div>
  }
  return (
    <div className={classNames.header}>
      {/* <div
        className={classNames.indicator}
      >
        <div style={{
          transition: 'all .2s',
          float: 'left',
          opacity: fatherHandleNav.navStatus === 'fold' ? '1' : '0',
          visibility: fatherHandleNav.navStatus === 'fold' ? 'visible' : 'hidden',
          maxWidth: fatherHandleNav.navStatus === 'fold' ? '50px' : '0'
        }}><Icon
            style={{
              fontSize: 20,
              verticalAlign: 'middle',
              padding: '0 10px',
              cursor: 'pointer',
            }}
            type="bars"
            onClick={e => fatherHandleNav.func()}
          /></div>
        <NavBreadcrumb style={{
          whiteSpace: 'nowrap'
        }} arr={menuTextArr} />
      </div> */}
      <div className={classNames.login} style={{ display: isSelf ? 'flex' : 'none' }}>
        {!username ? null :
          <div>

            <Notification
              rawMenu={rawMenu}
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: 10
              }}
            />
            <Dropdown
              placement="bottomCenter"
              overlay={
                (<Menu>
                  <Menu.Item>
                    <IconItem
                      iconType={"user"}
                      text={username}
                      style={{ verticalAlign: 'middle' }}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    <IconItem
                      iconType={"poweroff"}
                      text={"退出"}
                      onClick={onLogout}
                      style={{ verticalAlign: 'middle' }}
                    />
                  </Menu.Item>
                </Menu>)
              }
            >
              <div style={{display: 'inline-block'}}>
                <IconItem
                  iconType={"user"}
                  text={username}
                  style={{ verticalAlign: 'middle' }}
                />
              </div>

            </Dropdown>

            {/* <IconItem
              iconType={"close-square-o"}
              text={"退出"}
              onClick={onLogout}
              style={{ verticalAlign: 'middle' }}
            /> */}
          </div>
        }
      </div>

    </div>
  );
};

Header.propTypes = {};





