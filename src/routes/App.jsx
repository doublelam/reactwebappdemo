import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import classNames from './App.less';
import Login from "./Login";

import Sidebar from "../components/App/Sider";
import { Header } from "../components/App/Header.jsx";
import { Row, Col } from "antd";
import SalesMan from "../routes/SalesMan";





function logout(dispatch) {
  dispatch({
    type: "app/logout"
  })
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navStatus: 'unfold'
    }
  }
  render() {
    let {
      children,
      dispatch,
      history,
      location,
      params,
      route,
      routeParams,
      routes,
      username
  } = this.props;
    if (!username) {
      children = <Login />;
    }
    window.username = username;
    let displaySider = true;
    if (parent !== self) {
      displaySider = false
    }
    return (
      <div className={classNames.app}>
        <Row>
          {/* <Col span={24} style={{
            transition: 'all .2s',
            height: "100%",
            opacity: this.state.navStatus === 'fold' || !displaySider ? 0 : 1,
          }}>
          </Col> */}
          <Col span={24} style={{ height: '100%' }}>

            <Sidebar fatherHandleNav={{
              func: this.changeNavStatus.bind(this),
              navStatus: this.state.navStatus
            }}
              location={this.props.location}
              history={this.props.history}
              locationUrl={location.pathname.replace('/', '')}
              rightSide={<Header
                username={username}
                onLogout={() => logout(dispatch)}
                fatherHandleNav={{
                  func: this.changeNavStatus.bind(this),
                  navStatus: this.state.navStatus
                }}
              />}
            >
              {children && React.cloneElement(children, {
                fatherHandleNav: {
                  func: this.changeNavStatus.bind(this),
                  navStatus: this.state.navStatus,
                }
              })}

            </Sidebar>
          </Col>
        </Row>
      </div>
    );
  }

  changeNavStatus() {
    if (this.state.navStatus === 'unfold') {
      this.setState({
        navStatus: 'fold'
      });
      return;
    }
    if (this.state.navStatus === 'fold') {
      this.setState({
        navStatus: 'unfold'
      });
      return;
    }
  }
}


export default connect(({
  app
}) => ({
    ...app
  }))(App);
