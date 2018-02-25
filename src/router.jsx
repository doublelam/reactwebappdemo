import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  IndexRoute,
  Redirect
} from 'dva/router';
import App from './routes/App.jsx';
import coreEvents from "cc-core-events";
import SalesMan from './routes/SalesMan';
import {
  ContractSigningCount
} from './routes/ContractSigningCount';
import {
  TransportBussness
} from './routes/TransportBussness';
import {
  WaybillCount
} from './routes/WaybillCount';
import {
  YardsRent
} from './routes/YardsRent';
import {
  IncomeCount
} from './routes/IncomeCount';
import {
  AssetImmovable
} from './routes/AssetImmovable';
import {
  AssetMovable
} from './routes/AssetMovable';
import {
  AssetLowvalue
} from './routes/AssetLowvalue';
import PageNotFound from './routes/PageNotFound';
import {
  Colligate
} from './routes/Colligate';
import {
  ViperManage
} from './routes/ViperManage';
import {
  ForTest
} from './routes/ForTest';
import {
  CloudWarehouse
} from './routes/CloudWarehouse';
import {
  IndexPage
} from './routes/IndexPage';
import {
  IndexPager
} from './routes/IndexPager';
import {
  MyJob
} from './routes/MyJob';
import {
  PerformanceRecord
} from './routes/PerformanceRecord';
import {
  PerformanceReport
} from './routes/PerformanceReport';
import {
  MediaReceiptCount
} from './routes/MediaReceiptCount';
import {
  BussCircleAnalyz
} from './routes/BussCircleAnalyz';
import {
  BasementAnalyz
} from './components/BussCircleAnalyse/BasementAnalyz';
import {
  RankingAnalyz
} from './components/BussCircleAnalyse/RankingAnalyz';
import {
  StructureAnalyz
} from './components/BussCircleAnalyse/StructureAnalyz';
import {
  BussCircleCount
} from './routes/BussCircleCount';
import NoPermission from './routes/NoPermission';
// chen
import TransferEfficiency from './routes/TransferEfficiency';
import TransferEfficiencyChart from './routes/TransferEfficiencyChart';
import FailureAnalysis from './routes/FailureAnalysis';
// 
import {
  FromOutside
} from './routes/FromOutside';
import {
  NeteaseData
} from './routes/NeteaseData';
import {
  FromOutside1
} from './routes/FromOutside1';
import {
  ParkArea
} from './routes/ParkArea';
import {
  BusinessDiary
} from './routes/BusinessDiary';
import {
  BusinessDetail
} from './routes/BusinessDetail';
import {
  StaticUrl
} from './routes/StaticUrl';
import {
  TMSWaybill
} from './routes/TMSWaybill';
import {
  TMSLists
} from './components/tms/TMSLists';
import {
  TMSDetail
} from './components/tms/TMSDetail';
import {
  TMSConfigure
} from './routes/TMSConfigures';
import {
  TMSConDetail
} from './components/tms/TMSConDetail';
import {
  TMSTransMedia
} from './routes/TMSTransMedia';
import {
  NoticeCentre
} from './routes/NoticeCentre';
import {
  NoticeWarn
} from './routes/NoticeWarn';
import {
  VehicleManage
} from './routes/VehicleManage';
import {
  DriverManage
} from './routes/DriverManage';
import {
  CoEnterprise
} from './routes/CoEnterprise';
import {
  ClientManage
} from './routes/ClientManage';
import {
  NetManage
} from './routes/NetManage';
import {
  AllianCensorshiop
} from './routes/AllianCensorship';
import {
  CensorshipDetail
} from './routes/CensorshipDetail';
import {
  CensorshipDetailAllot
} from './routes/CensorshipDetailAllot';
import {
  CensorshipList
} from './routes/CensorshipList';
import {
  FromInterface
} from './routes/FromInterface';
import {
  DispenseCentre
} from './routes/DispenseCentre';
import {
  BasicInfo
} from './components/allotCenter/BasicInfo';
import {
  BusinessInfo
} from './components/allotCenter/BusinessInfo';
import {
  OperateInfo
} from './components/allotCenter/OperateInfo';
import {
  AllotList
} from './routes/allot-quit/AllotList';
import {
  AllotDetail
} from './routes/allot-quit/AllotDetail';
import {
  StackList
} from './routes/stack-quit/StackList';
import {
  StackDetail
} from './routes/stack-quit/StackDetail';
import {
  Notification
} from './components/notice/Notification';
import {
  LogManage
} from './routes/LogManage';
import {
  RoadInfo
} from './routes/RoadInfo';

function onUpdate() {
  coreEvents.emit("router:update");
}

let loadedModels = {};

function configModel(app) {
  return (url, req) => {
    if (loadedModels[url]) return;
    loadedModels[url] = true;
    app.model(req(url));
  };
}

// TODO
// ?1: {component: req('./routes/Index')}
// ?2: require('./routes/SalesMan')

export default function ({
  history,
  app
}) {
  app.model(require("./models/app"));
  app.model(require("./models/salesMan"));
  app.model(require("./models/salesManModalView"));

  // const routes = [
  //   {
  //     path: '/',
  //     component: App,
  //     getIndexRoute(nextState, cb) {
  //       require.ensure([], require => {
  //         // cb(null, {component: require('./routes/Index')});
  //         cb(null, {component: require('./routes/SalesMan')});
  //       });
  //     },
  //     childRoutes: [
  //       {
  //         path: 'sales-man',
  //         name: 'sales-man',
  //         getComponent(nextState, cb) {
  //           require.ensure([], require => {
  //             cb(null, require('./routes/SalesMan'));
  //           });
  //         }
  //       },
  //       {
  //         path: '*',
  //         name: 'pageNotFound',
  //         getComponent(nextState, cb) {
  //           require.ensure([], require => {
  //             cb(null, require('./routes/PageNotFound'));
  //           });
  //         }
  //       }
  //     ]
  //   }
  // ];

  return (
    <Router onUpdate={
      onUpdate
    }
      history={
        history
      } >
      <Route path="/"
        component={
          App
        } >
        {/* <IndexRedirect to="IndexPager" /> */}
        <Route path="IndexPager"
          component={
            IndexPager
          } >
        </Route>
        <Route path="Salesman"
          component={
            SalesMan
          } >
        </Route>
        <Route path="RentRoom"
          component={
            YardsRent
          } >
        </Route>
        <Route path="ShipOrder"
          component={
            TransportBussness
          } >
        </Route>
        <Route path="RentPact"
          component={
            ContractSigningCount
          } >
        </Route>
        <Route path="ShippingOrders"
          component={
            WaybillCount
          } >
        </Route>
        <Route path="Finance"
          component={
            IncomeCount
          } >
        </Route>
        <Route path="AssetImmovable"
          component={
            AssetImmovable
          } >
        </Route>
        <Route path="AssetMovable"
          component={
            AssetMovable
          } >
        </Route>
        <Route path="AssetLowvalue"
          component={
            AssetLowvalue
          } >
        </Route>
        <Route path="Colligate"
          component={
            Colligate
          } >
        </Route>
        <Route path="ViperManage"
          component={
            ViperManage
          } >
        </Route>
        <Route path="CloudWarehouse"
          component={
            CloudWarehouse
          } >
        </Route>
        <Route path="MyJob"
          component={
            MyJob
          } >
        </Route>
        <Route path="PerformanceRecord"
          component={
            PerformanceRecord
          } >
        </Route>
        <Route path="PerformanceReport"
          component={
            PerformanceReport
          } >
        </Route>
        <Route path="MediaReceiptCount"
          component={
            MediaReceiptCount
          } >
        </Route>
        <Route path="BussCircleAnalyz"
          component={
            BussCircleAnalyz
          } >
          <IndexRedirect to="BasementAnalyz" />
          <Route path="BasementAnalyz"
            component={
              BasementAnalyz
            } > </Route>
          <Route path="RankingAnalyz"
            component={
              RankingAnalyz
            } > </Route>
          <Route path="StructureAnalyz"
            component={
              StructureAnalyz
            } > </Route>
        </Route >
        < Route path="BussCircleCount"
          component={
            BussCircleCount
          } > </Route>
        <Route path="justfortest"
          component={
            ForTest
          } >
        </Route>
        <Route path="TransferEfficiency"
          component={
            TransferEfficiency
          } >
        </Route>
        <Route path="TransferEfficiencyChart"
          component={
            TransferEfficiencyChart
          } >
        </Route>
        <Route path="FromOutside"
          component={
            FromOutside
          } > </Route>
        <Route path="NeteaseData"
          component={
            NeteaseData
          } > </Route>
        <Route path="FromOutside1"
          component={
            FromOutside1
          } > </Route>
        <Route path="ParkArea"
          component={
            ParkArea
          } > </Route>
        <Route path="FailureAnalysis"
          component={
            FailureAnalysis
          } >
        </Route>
        <Route path="BusinessDiary"
          component={
            BusinessDiary
          } >
        </Route>
        <Route path="BusinessDetail"
          component={
            BusinessDetail
          } >
        </Route>
        <Route path="staticurl"
          component={
            StaticUrl
          } >
        </Route>
        <Route path="tmswaybill"
          component={
            TMSWaybill
          } >
          <Route path="tmslists"
            component={
              TMSLists
            } > </Route> <Route path="tmsdetail"
              component={
                TMSDetail
              } > </Route> </Route > <Route path="tmsconfigure"
                component={
                  TMSConfigure
                } >
          <Route path="tmslists"
            component={
              TMSLists
            } > </Route>
        </Route >
        <Route path="tmsconDetail"
          component={
            TMSConDetail
          } >
        </Route>
        <Route path="tmstransmedia"
          component={
            TMSTransMedia
          } > { /* <IndexRedirect to="tmslists" /> */} <Route path="tmslists"
            component={
              TMSLists
            } >
          </Route>
        </Route >
        <Route path="noticentre"
          component={
            NoticeCentre
          } >
        </Route>
        <Route path="noticewarn"
          component={
            NoticeWarn
          } >
        </Route>
        <Route path="vehiclemanage"
          component={
            VehicleManage
          } >
        </Route>
        <Route path="drivermanage"
          component={
            DriverManage
          } >
        </Route>
        <Route path="coenterprise"
          component={
            CoEnterprise
          } >
        </Route>
        <Route path="clientmanage"
          component={
            ClientManage
          } >
        </Route>
        <Route path="netmanage"
          component={
            NetManage
          } >
        </Route>
        <Route path="alliancensorship"
          component={
            AllianCensorshiop
          } >
        </Route>
        <Route path="censorshipdetail"
          component={
            CensorshipDetail
          } >
        </Route>
        <Route path="censorshipdetailallot"
          component={
            CensorshipDetailAllot
          } >
        </Route>
        <Route path="censorshiplist"
          component={
            CensorshipList
          } >
        </Route>
        <Route path="frominterface"
          component={
            FromInterface
          } >
        </Route>
        <Route path="notification"
          component={
            Notification
          } >
        </Route>
        <Route path="dispensecentre"
          component={
            DispenseCentre
          } >
          <Route path="basicinfo"
            component={
              BasicInfo
            } >
          </Route>
          <Route path="businessinfo"
            component={
              BusinessInfo
            } >
          </Route>
          <Route path="operateinfo"
            component={
              OperateInfo
            } >
          </Route>
        </Route >
        <Route path="allotquitnetlist"
          component={
            AllotList
          } >
        </Route>
        <Route path="allotquitnetdetail"
          component={
            AllotDetail
          } >
        </Route>
        <Route path="stackquitnetlist"
          component={
            StackList
          } >
        </Route>
        <Route path="stackquitnetdetail"
          component={
            StackDetail
          } >
        </Route>
        <Route path="logmanage"
          component={
            LogManage
          } >
        </Route>
        <Route path="roadinfo"
          component={
            RoadInfo
          }
        >
        </Route>
        <Route path="NoPermission"
          component={
            NoPermission
          }
        />
        <Route path="*"
          component={
            PageNotFound
          }
        />
      </Route >
    </Router>
  );
}
