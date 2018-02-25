import React, { createClass, PropTypes } from 'react';
import { Link } from "dva/router";
import { Menu, Icon, message, Popover } from "antd";
import classNames from "./Sidebar.less";
import { post, get } from '../../utils/ajax';
import { SimulateAjax } from '../../simulateAjax/simulateAjax';
import logo from '../../assets/logo.png';
import { Crumb } from './Crumb';
import { sorter } from 'recursive-methods';
const { SubMenu, Item, ItemGroup } = Menu;



export class SubMenuTitle extends React.Component {
  constructor(props, {
    iconType,
    text
  }) {
    super(props);
    this.iconType = iconType;
    this.text = text;
  }
  render() {
    return (
      <span className={classNames.subMenuTitle}>
        <Icon type={this.iconType} />
        <span>{this.text}</span>
      </span>
    );
  }
}

export default class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.crumbs = {};
    this.lastNav = <div></div>;
    this.state = {
      menuLevel: [],
      rawMenu: [],
      selectedKeys: [],
      openKeys: []
    }
  }

  render() {
    if (this.props.location.query.tabId) {
      this.lastNav = <Menu
        style={{ backgroundColor: 'transparent' }}
        onOpenChange={openKeys => {
          this.setState({ openKeys, })
        }}
        theme="dark"
        selectedKeys={[`${this.props.location.query.tabId}`]}
        mode="inline"
        openKeys={this.state.openKeys}
      >
        {(this.state.menuLevel[2] || []).filter(v => String(v.parentNode) === String(this.state.selectedKeys[0])).map(v => {
          return (
            <SubMenu key={v.aclMenuId} title={v.menuName}>
              {
                (this.state.menuLevel[3] || []).filter(val => {
                  return val.parentNode === v.aclMenuId
                }).map(value => {
                  if (/linktoouter:/g.test(value.url)) {
                    return <Item key={value.aclMenuId}><a href={value.menuUrl.replace(/linktoouter:/, '')} target="_blank">{value.menuName}</a></Item>
                  }
                  if (/\w+/i.test(value.url)) {
                    return <Item key={value.aclMenuId}><Link to={value.url}>{value.menuName}</Link></Item>
                  }
                  const content = (
                    <Menu selectedKeys={[`${this.props.location.query.tabId}`]} >
                      {(this.state.menuLevel[4] || [])
                        .filter(v => v.parentNode === value.aclMenuId)
                        .map(v => <Item key={v.aclMenuId}><Link to={v.url}>{v.menuName}</Link></Item>)}
                    </Menu>
                  );
                  // return content;
                  return <Item key={value.aclMenuId}>
                    <Popover overlayClassName="left-popver" arrowPointAtCenter={true} content={content} placement="right" >
                      {value.menuName}<Icon style={{ marginLeft: 50, fontSize: 10 }} type="right" />
                    </Popover>
                  </Item>
                })
              }
            </SubMenu>
          )
        })}
      </Menu>;
    }
    let ifSelf = window.parent === self;
    let leftWidth = ifSelf ? '200px' : '0px'
    return <div className="nav-container" style={{ width: '100%', position: 'relative' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          body{
            background-color: #142233;
            overflow-y: hidden;
            font-size: 16px;
            min-width: 1400px;
          }
          .root-nav .ant-menu-item-selected.ant-menu-item{ 
            transform: scale(1.25);
          }
          .left-popver .ant-menu-inline, .ant-menu-vertical{
            border-right: none
          }
          .left-popver .ant-popover-inner-content{
            padding: 0
          }
          .left-popver .ant-menu {
            background-color: transparent;
            overflow: hidden;
          }
          .left-popver .ant-popover-inner{
            background-color: #507DB5
          }
          .left-popver .ant-menu .ant-menu-item {
            border-bottom: 1px solid #7196C3
          }
          .left-popver .ant-menu .ant-menu-item:last-child {
            border-bottom: none
          }
          .left-popver,.ant-popover-placement-right>.ant-popover-content>.ant-popover-arrow:after{
            border-right-color: #507DB5;
          }

          .left-popver .ant-menu .ant-menu-item>a{
            color: hsla(0,0%,100%,.67);
          }
          
          .left-popver .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
            background: transparent;
          }

          .left-popver .ant-menu .ant-menu-item:active{
            background: transparent;
          }
          .left-popver .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected>a{
            color: #7EC5F2;
          }
          
          .left-popver .ant-menu .ant-menu-item:active>a{
            color: #7EC5F2;
          }
          .nav-head .ant-menu {
            overflow: hidden;
          }
          .nav-head .ant-menu-dark .ant-menu-item>a{
            line-height: 22px
          }
          .ant-menu-horizontal{
            border-bottom: none
          }
          .nav-container::before{
            position: absolute;
            top: 0px;
            left: 456px;
            background: linear-gradient(0deg, #182C46, #172942);
            content: '';
            transform: skew(-30deg);
            width: 200px;
            height: 100px;
            z-index: 0
          }
          .nav-head::after{
            position: absolute;
            top: -120px;
            left: -105px;
            background: linear-gradient(150deg, #22416D 20%, #172232);
            content: '';
            transform: skew(-30deg);
            width: 300px;
            height: 600px;
            z-index: 0;
          }
          .nav-head::before{
            position: absolute;
            top: 0px;
            left: 256px;
            background: linear-gradient(0deg, #1C3556, #1C3351);
            content: '';
            transform: skew(-30deg);
            width: 200px;
            height: 100px;
            z-index: 0
          }
          .ant-menu-dark .ant-menu-submenu>.ant-menu{
            background-color: transparent
          }
          .ant-menu-inline .ant-menu-submenu-title{
            font-size: inherit
          }
          .ant-menu-inline .ant-menu-item{
            font-size: 14px;
          }
          
        `}} />
      <nav className="nav-head" style={{
        display: ifSelf ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 'none', color: '#eee', zIndex: 1, paddingLeft: 20, width: '80%' }}>
          <div style={{ display: 'inline-block' }}>
            <img style={{ verticalAlign: 'middle' }} src={logo} alt="" />
          </div>
          {/* <div style={{ display: 'inline-block',verticalAlign: 'middle', fontSize: 20, fontWeight: 'bold' }}>&nbsp;BOSS<br /><span style={{
            fontSize: 14,
            lineHeight: 0
          }}>运营平台</span></div> */}
          <div style={{
            verticalAlign: 'middle',
            zIndex: 1,
            overflow: 'auto',
            overflowY: 'hidden',
            marginLeft: 100,
          }}>
            <Menu
              style={{
                backgroundColor: 'transparent',
                zIndex: 1,
                whiteSpace: 'nowrap'
              }}
              className="root-nav"
              theme="dark"
              mode="horizontal"
              selectedKeys={this.state.selectedKeys}
            >
              {(this.state.menuLevel[1] || []).map(v => {
                const linkUrl = this.findAUrl(v);
                // console.log('link', linkUrl);
                return <Item style={{
                  display: 'inline-block',
                  float: 'none',
                  padding: '34px 15px'
                }} key={v.aclMenuId}><Link to={linkUrl}>{v.menuName}</Link></Item>
              })}
            </Menu>
          </div>
        </div>

        <div style={{ flex: 'none', color: '#eee' }}>
          {this.props.rightSide && React.cloneElement(this.props.rightSide, {
            rawMenu: this.state.rawMenu,
          })}
        </div>
      </nav>
      <div style={{ position: 'relative' }}>
        <nav ref="nav" style={{ position: 'absolute', width: leftWidth, overflow: 'auto', top: 0, left: 0 }}>
          {/nopermission/i.test(this.props.location.pathname) ? <div></div> : this.lastNav}
        </nav>
        <div ref="sub-con" style={{
          position: 'absolute',
          width: `calc(100% - ${leftWidth})`,
          overflow: 'auto',
          top: 0,
          right: 0,
          backgroundColor: '#fff',
          padding: 15
        }}>
          <Crumb data={(this.crumbs[this.props.location.query.tabId]) || []} />
          {this.props.children}
        </div>
      </div>
    </div>
  }

  componentDidMount() {
    this.reSizeContainer();
    this.getAclData();
  }

  componentWillReceiveProps(nextProps) {
    this.reSizeContainer();
    this.getCurrentSubMenu(nextProps);
  }

  getCurrentSubMenu(props) {
    const locationTabId = props.location.query.tabId || 'NOT FUND TABID';
    console.log('location tab id', locationTabId)
    const getThePoint = this.state.rawMenu
      .filter(v => String(v.aclMenuId) === String(locationTabId));
    if (!getThePoint.length) {
      this.setState({
        selectedKeys: []
      });
      return;
    }
    const level1Point = this.findLevel1(getThePoint[0]);
    // console.log('point', getThePoint, 'second level point', level1Point);
    this.setState({
      selectedKeys: [`${level1Point.aclMenuId}`]
    });
  }

  findDefaultUrl(menus, routes = ['rid=38186', 'indexpager']) {
    for (let route of routes) {
      for (let v of menus) {
        let defaultUrlReg = new RegExp(route, 'i');
        if (defaultUrlReg.test(v.menuUrl)) {
          return v
        };
      }
    }
    for (let v of menus) {
      if (/\w+/.test(v.menuUrl)) {
        return v;
      }
    }
    return false;
  }

  reSizeContainer() {
    const [nav, subCon] = [this.refs['nav'], this.refs['sub-con']];
    const [navTop, subConTop] = [nav.getBoundingClientRect().top, subCon.getBoundingClientRect().top];
    [nav, subCon].map((v, i) => {
      const resize = `calc(100vh - ${[navTop, subConTop][i]}px)`
      v.style.height = resize;
    })
  }

  getBreadCrumb(menus, points) {
    const getBreadCrumbI = (arr, point) => {
      if (point.level <= 0) {
        return arr;
      }
      return getBreadCrumbI([point.menuName].concat(arr), this.getHigherLevel(menus, point));
    };

    for (let v of points) {
      this.crumbs[v.aclMenuId] = getBreadCrumbI([], v);
    }
  }

  getHigherLevel(menus, point) {
    const parentId = point.parentNode;
    for (let v of menus) {
      if (v.aclMenuId === parentId) {
        return v;
      }
    }
    return false;
  }

  resetUrl(url, num) {
    if (!/\w/i.test(url)) {
      return url;
    };
    if (/.*\?.+/.test(url)) {
      return url + '&tabId=' + num;
    };
    if (/.*\?$/.test(url)) {
      return url + 'tabId=' + num;
    };
    return url + '?tabId=' + num;
  }

  getAclData() {
    post('welcome/menuInfonew').then(data => {
      if (!data.success) {
        message.error(data.message || '网络错误');
        return;
      };
      const newModule = sorter((a, b) => a.rank > b.rank, data.module.map(v => ({
        ...v,
        url: this.resetUrl(v.menuUrl, v.aclMenuId),
      })));
      const [rawData, levelData] = [newModule, this.arrangeMenu(newModule)];
      this.getBreadCrumb(rawData, (levelData[3] || []).concat(levelData[4] || []));
      const defaulturl = (this.findDefaultUrl(rawData) || { url: 'NoPermission' }).url;
      if (!/\w+/i.test(this.props.location.pathname)) {
        this.directTo(defaulturl);
      }
      this.setState({
        menuLevel: levelData,
        rawMenu: rawData,
        openKeys: (levelData[2] || []).map(v => `${v.aclMenuId}`)
      }, () => {
        this.getCurrentSubMenu(this.props);
      });
    })
  }

  findLevel1(point) {
    if (point.level <= 1) {
      return point;
    };
    if (point.level >= 2) {
      const parentNode = point.parentNode;
      for (let v of this.state.menuLevel[point.level - 1]) {
        if (v.aclMenuId === parentNode) {
          // console.log('gettt', v);
          return this.findLevel1(v);
        }
      }
    }
    return false;
  }

  findAUrl(point) {
    if (!this.state.menuLevel.length) {
      return 'NOT YET GET LEVEL MENU';
    }
    const thisLevel = point.level;
    if (thisLevel >= 4) {
      return 'NoPermission';
    }
    const nextLevelPoints = (this.state.menuLevel[thisLevel + 1] || [])
      .filter(v => v.parentNode === point.aclMenuId);
    if (!nextLevelPoints.length) {
      return 'NoPermission';
    }
    for (let v of nextLevelPoints) {
      if (/\w+/g.test(v.url)) {
        return v.url;
      }
    }
    return this.findAUrl(nextLevelPoints[0]);
  }

  directTo(route) {
    this.props.history.replace(route);
  }

  arrangeMenu(data) {
    const menuLevel = [];
    for (let v of data) {
      menuLevel[v.level] = (menuLevel[v.level] || []).concat([v]);
    }
    return menuLevel;
  }
}

// export default class Sider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemListInfo: [],
//     };
//     this.features = {
//       listSelectedKey: this.props.locationUrl,
//       openKeys: [],
//       itemLists: []
//     };
//   }

//   renderLists() {
//     // console.log('sider script start');
//     const dataInfo = this.state.itemListInfo;
//     this.features.itemLists = [];
//     this.features.listSelectedKey = null;
//     // console.log('feature', this.features);
//     window.isBlock = true;
//     for (let item of dataInfo) {
//       if (String(item.menuUrl).indexOf('IndexPager') !== -1) {
//         window.isBlock = false;
//       }
//       this.features.openKeys.push(`${item.aclMenuId}-${item.menuName}`);
//       let children = item.childrenNodes;
//       // const urls = dataInfo[item].urls;
//       this.features.itemLists.push(
//         <SubMenu key={`${item.aclMenuId}-${item.menuName}`} title={item.menuName}>

//           {children.map((val, index) => {
//             if (String(val.menuUrl).indexOf('IndexPager') !== -1) {
//               window.isBlock = false;
//             }
//             if (this.props.locationUrl.indexOf(val.menuUrl.replace('/', '')) !== -1) {
//               this.features.listSelectedKey = `${val.aclMenuId}-${val.menuUrl}`;
//             }
//             if (val.childrenNodes && val.childrenNodes.length > 0) {
//               {/*console.log('url', val.menuUrl, 'if find linktooutr', String(val.menuUrl).indexOf('linktoouter:') !== -1);*/ }
//               {/*this.features.openKeys.push(`${val.aclMenuId}-${val.menuUrl}`);*/}
//               return (
//                 <SubMenu key={`${val.aclMenuId}-${val.menuUrl}`} title={val.menuName}>
//                   {
//                     val.childrenNodes && val.childrenNodes.map((val, index) => {
//                       if (String(val.menuUrl).indexOf('IndexPager') !== -1) {
//                         window.isBlock = false;
//                       }
//                       if (this.props.locationUrl.indexOf(val.menuUrl.replace('/', '')) !== -1) {
//                         this.features.listSelectedKey = `${val.aclMenuId}-${val.menuUrl}`;
//                       }
//                       let linkA = (!val.menuUrl || String(val.menuUrl).indexOf('linktoouter:') === -1) ?
//                         (<Link to={val.menuUrl}>{val.menuName}</Link>) :
//                         (<a href={String(val.menuUrl).replace('linktoouter:', '')} target="_blank">
//                           {val.menuName}
//                         </a>);
//                       return (
//                         <Item key={`${val.aclMenuId}-${val.menuUrl}`}>
//                           {linkA}
//                         </Item>
//                       );
//                     })
//                   }
//                 </SubMenu>
//               );
//             }
//             let linkA = (!val.menuUrl || String(val.menuUrl).indexOf('linktoouter:') === -1) ?
//               (<Link to={val.menuUrl}>{val.menuName}</Link>) :
//               (<a href={String(val.menuUrl).replace('linktoouter:', '')} target="_blank">
//                 {val.menuName}
//               </a>);
//             return (
//               <Item key={`${val.aclMenuId}-${val.menuUrl}`}>
//                 {linkA}
//               </Item>
//             );
//           })}

//         </SubMenu>
//       );
//     }
//   }

//   render() {
//     this.renderLists();
//     return (
//       <div
//         className={classNames.sidebar}
//         style={{
//           backgroundColor: '#505050'
//         }}
//       >
//         <div className={classNames.menuHeader}>
//           <div className={classNames.menuLogo} style={{
//             padding: '20px 10px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <h2>BOSS运营平台</h2>
//             <div>
//               <Icon type="arrow-left" className={classNames.foldLeft}
//                 onClick={e => {
//                   {/*console.log(this.props.fatherHandleNav);*/ }
//                   this.props.fatherHandleNav.func();
//                 }}
//               />
//             </div>
//           </div>

//         </div>
//         <Menu
//           mode="inline"
//           theme="dark"
//           selectedKeys={[this.features.listSelectedKey]}
//           defaultOpenKeys={this.features.openKeys}
//         >
//           {this.features.itemLists}
//         </Menu>
//       </div>
//     );
//   }

//   componentWillMount() {
//     let _this = this;
//     function getMenuList(data) {
//       // console.log('start');
//       const itemLists = data.module;

//       let levelOne = [],
//         levelTwo = [],
//         levelThree = [];

//       for (let item of itemLists) {
//         if (item.level === 1) {
//           levelOne.push(item);
//           continue;
//         }
//         if (item.level === 2) {
//           levelTwo.push(item);
//           continue;
//         }
//         if (item.level === 3) {
//           levelThree.push(item);
//           continue;
//         }
//       }

//       [levelOne, levelTwo, levelThree].map((val, index) => {
//         val.sort((a, b) => {
//           return (a.rank - b.rank);
//         });
//       });
//       // console.log('levelone', levelOne, 'level three', levelThree);
//       for (let item of levelTwo) {
//         item['childrenNodes'] = [];
//         for (let innerItem of levelThree) {
//           if (innerItem.parentNode === item.aclMenuId) {
//             item['childrenNodes'].push(innerItem);
//           }
//         }
//       }

//       for (let item of levelOne) {
//         item['childrenNodes'] = [];
//         for (let innerItem of levelTwo) {
//           if (innerItem.parentNode === item.aclMenuId) {
//             item['childrenNodes'].push(innerItem);
//           }
//         }
//       }
//       // console.log('levelone:', levelOne, 'level twos', levelTwo)
//       let dataNew = levelOne;
//       dataNew.sort((a, b) => {
//         return a.rank - b.rank;
//       });

//       _this.setState({
//         itemListInfo: dataNew
//       });
//       // console.log('navigation', dataNew);
//     };

//     get('welcome/menuInfo').then(data => {
//       // console.log('list data', data);
//       getMenuList(data);
//     }).catch(err => {
//       // console.log('error', err);
//     });
//   }
// }
