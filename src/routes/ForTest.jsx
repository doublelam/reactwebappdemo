import React from 'react';
import { Table, TreeSelect, DatePicker } from 'antd';
import { InfoCount } from '../components/InfoCount';
import { tableInfo } from '../simulateAjax/simulateAjax';
import publicStyles from '../publicStyles/contentStyles.less';
import { ObjOperate } from '../utils/objOperate';
import { get, post } from '../utils/ajax';
export class ForTest extends React.Component {

  render() {
    const columns = [
      {
        title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', filters: [{
          text: 'Joe',
          value: 'Joe',
        }, {
          text: 'John',
          value: 'John',
        }],
      },
      { title: 'Age', width: 100, dataIndex: 'age', key: 'age' },
      { title: 'Column 1', width: 100, dataIndex: 'address', key: '1' },
      { title: 'ssa', fixed: 'left', width: 100, dataIndex: 'q', key: '3' },
      { title: 'ssa', width: 100, dataIndex: 'w', key: '4' },
      { title: 'ssa', width: 100, dataIndex: 'e', key: '5' },
      { title: 'ssa', width: 100, dataIndex: 'r', key: '6' },
    ];
    ['012324324', '324.34342', '3243.432423.4535', 'fdgfbfbfg', '2234542432431.43545435'].map((val, index) => {
      console.log(/^(-?\d+)(\.\d+)?$/.test(val));
      if (/^(-?\d+)(\.\d+)?$/.test(val)) {
        console.log(val, ObjOperate.addComma(val));
      }
    });

    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(
        {
          key: Math.random(),
          name: 'John Brown',
          age: 32,
          address: 'New York Park',
          q: 'fff',
          w: <div style={{
            textAlign: 'right',
          }}>{ObjOperate.addComma('12343554546566657.432')}</div>,
          e: 'dffff',
          r: 'sss'
        }
      );
    }
    data.push({
      key: Math.random(),
      age: 444,
      address: 'sdfgergerg',
      other: 'dsfgergrth erget eter'
    });
    const treeData = [{
      label: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [{
        label: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      }],
    }, {
      label: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [{
        label: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      }, {
        label: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      }, {
        label: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      }],
    }];

    const tProps = {
      treeData,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: TreeSelect.SHOW_CHILD,
      searchPlaceholder: 'Please select',
      style: {
        width: 300,
      },
    };


    return (

      <div>
        <button className={publicStyles.rightGap}>test1</button><button>test2</button>
        <InfoCount countData={tableInfo} />
        <Table
          rowSelection={true}
          columns={columns}
          dataSource={data}
          bordered
          size="small"
          locale={{
            emptyText: 'adewf'
          }}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            defaultCurrent: 1,
            pageSizeOptions: ['10', '30', '50', '100', '200']
          }}
          scroll={{ x: columns.length * 120, y: 380 }}
        />


        <TreeSelect {...tProps}
          allowClear
          style={{
            minWidth: 100,
            maxWidth: 300
          }}
        />

        <DatePicker.RangePicker
          onChange={(data, dataString) => {
            if (!data || data.length === 0) {
              return;
            }
            console.log(data)
          }}
        />

        <a ref="alink" href="">ferwfsdfvdfvgdf</a>
        <iframe src="static/pages/test.html" frameborder="0"></iframe>
      </div>
      
    );
  }

  componentDidMount() {
    post('testgetexcel', {
      timeType: 0,
      SQStartDate: '2017-1-1',
      SQEndDate: '2017-9-1',
      area: 'region',
      SQClassType: '餐饮',
      pageSize: 100
    }).then(data => {
      console.log('dddddd');
      console.log('dddta',new Buffer(data).toString('base64'));
      this.refs.alink.href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' + new Buffer(data).toString('base64');
      this.refs.alink.download = 'test.xls';
  });
  }
}
