import React from 'react';
import { Icon } from 'antd';
export class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '30',
        height: '80%',
        justifyContent: 'center'
      }}>
        <h2>欢迎进入传化网运营管理系统!</h2>
        <div>
          <Icon type="smile-o"
            style={{
              fontSize: '150',
              textShadow: '2px 2px 0px rgba(255,255,255,1)',
              padding: '20px 0'
            }}
          />
        </div>
      </div>
    );
  }
}

