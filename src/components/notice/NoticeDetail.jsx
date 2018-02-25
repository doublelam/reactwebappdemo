import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message,
  Select,
  Icon,
  Button,
  Input,
  DatePicker,
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";

const fields = [['inputDate', 200], ['title', 300], ['msgSmallType', 100], ['isRead', 50]];
const MSG_MAP = {
  sort: '序号',
  inputDate: '消息产生时间',
  title: '消息标题',
  msgSmallType: '消息类型',
  isRead: '消息状态',
  operate: '操作'
}
const STATUS_MAP = {
  YES: '已阅读',
  NO: '未阅读'
};

const LINK_MAP = ['Warn', 'Warn', 'Warn', 'Warn']
export class NoticeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [],
      pageSize: 30,
      current: 1,
      total: 0,
      tableLoading: false,
      typeList: [],
      statusList: [],
      // form info
      title: '',
      msgSmallType: void 0,
      isRead: void 0,
      DataTime: void 0,
    }
    this.temperateType = null;
  }


  render() {
    let columns = fields.map(v => ({
      title: MSG_MAP[v[0]],
      dataIndex: v[0],
      key: v[0],
      width: v[1]
    }));
    columns.unshift({
      title: '序号',
      key: 'sortNum',
      width: 50,
      render: (text, record, index) => {
        return index + 1
      }
    })
    columns.push({
      title: '操作',
      key: 'operate',
      width: 100,
      render: (text, record, index) => {
        if (this.props.msgType === '2') {
          return <Link to={'notification' + '?' + ObjOperate.objToUrlQuery({
            userMessageId: record.userMessageId
          })}><span onClick={() => {
            this.setRead(record.userMessageId);
          }}>查看详情</span></Link>
        }
        if (record.content && record.content.length) {
          return <Link to={record.content}><span onClick={() => {
            this.setRead(record.userMessageId);
          }}>查看详情</span></Link>
        }
        return <Link to={'notice' + LINK_MAP[this.props.msgType] + '?' + ObjOperate.objToUrlQuery({
          msgType: this.props.msgType,
          messageId: record.userMessageId
        })}>查看详情</Link>
      }
    })
    let divS = {
      padding: 5,
      display: 'inline-block',
      whiteSpace: 'nowrap'
    }
    columns = columns.filter(v => {
      if (this.props.msgType !== '2' && v.dataIndex === 'msgSmallType') {
        return false
      }
      return true
    })

    return (

      <section>
        <div>
          <div style={divS}>
            <span>标题：</span><Input
              value={this.state.title}
              onChange={e => {
                this.setState({
                  title: e.target.value
                })
              }}
              placeholder="请输入推送标题" style={{ width: 150 }} />
          </div>
          <div style={{ ...divS, display: this.props.msgType !== '2' ? 'none' : 'inline-block' }}>
            消息类型：<Select allowClear placeholder="全部" style={{ minWidth: 100 }}
              value={this.state.msgSmallType}
              onChange={v => {
                this.setState({
                  msgSmallType: v
                })
              }}
            >
              {this.state.typeList.map(v => <option key={v.type || v.partyName}>{v.type || v.partyName}</option>)}
            </Select>
          </div>
          <div style={divS}>
            消息状态：<Select
              value={this.state.isRead}
              onChange={v => {
                this.setState({
                  isRead: v
                })
              }}
              allowClear placeholder="全部" style={{ minWidth: 100 }}>
              {[{ st: 'YES', na: '已阅读' },
              { st: 'NO', na: '未阅读' }].map(v => <option value={v.st}>{v.na}</option>)}
            </Select>
          </div>
          <div style={divS}>
            时间：<DatePicker.RangePicker
              value={this.state.DataTime}
              onChange={v => {
                this.setState({
                  DataTime: v
                })
              }}
            />
          </div>
          <div style={divS}>
            <Button type="primary" onClick={e => {
              this.getInfo(this.props, '');
            }}>查询</Button>
          </div>

        </div>
        <Table
          columns={columns}
          dataSource={this.state.tableSource.map(v => ({
            ...v, isRead: v['isRead'] === 'NO'
              ? <span style={{ color: '#CE5849' }}>{STATUS_MAP[v['isRead']]}</span>
              : STATUS_MAP[v['isRead']]
          }))}
          scroll={{ x: 100 * columns.length, y: `calc(100vh - 200px)` }}
          bordered
          loading={this.state.tableLoading}
          pagination={{
            style: {
              marginRight: 10
            },
            current: this.state.current,
            total: this.state.total,
            size: 'small',
            defaultPageSize: 30,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['30', '50', '100', '200']
          }}
          onChange={(pagination, filter, sorter) => {
            this.setState({
              current: pagination.current,
              pageSize: pagination.pageSize
            }, () => {
              this.getInfo(this.props, '');
            });
          }}
        />
      </section>
    )
  }

  componentWillReceiveProps(nextprops) {
    this.getInfo(nextprops, '', true);
  }
  componentDidMount() {
    this.getInfo(this.props, '', true);
    this.getTypeLists()
  }

  setRead(messageId) {
    post('userMessage/read', { messageIdsStr: JSON.stringify([messageId]) }).then(data => {
      if (!data.success) {
        console.log('read status error:' + data.message)
        return;
      }
      console.log('read status setted')
      return;
    })
  }

  getInfo(props, title, ifOut) {
    if (props.msgType === this.temperateType && ifOut) {
      return;
    }
    console.log('receive num', props.msgType)
    if (ifOut) {
      this.setState({
        current: 1
      }, () => {
        this.getDetail(props.msgType, title);
        this.temperateType = props.msgType;
      })
      return;
    }
    this.getDetail(props.msgType, title);
    this.temperateType = props.msgType;
  }

  handleParam(fieldsArr) {
    let _obj = {}
    fieldsArr.forEach(ele => {
      console.log('ele', this.state[ele])
      if (this.state[ele] && this.state[ele].length) {
        if (ele === 'DataTime') {
          _obj['begin' + ele] = this.state[ele][0].format('YYYY-MM-DD');
          _obj['end' + ele] = this.state[ele][1].format('YYYY-MM-DD');
          return
        }
        _obj[ele] = this.state[ele]
      }
    });
    return _obj;
  }

  getTypeLists() {
    [
      { name: 'typeList', url: 'statistics/welcome/queryExtOptions', param: { field: 'UserMessageTask_smallType' } },
    ].map(v => {
      post(v.url, v.param).then(data => {
        if (!data.success) {
          message.warn(data.massage || '网络错误！');
          return;
        }
        let st = {};
        st[v.name] = data.module
        this.setState(st)
      })
    })

  }

  getDetail(msgType, title) {
    this.setState({
      tableLoading: true
    })
    let getSearch = this.handleParam(['title', 'msgSmallType', 'isRead', 'DataTime'])
    console.log('getsearch', getSearch)
    let param = {
      ...getSearch,
      pageNum: this.state.current,
      pageSize: this.state.pageSize,
      msgType,
    }

    post('userMessage/messagePage', param).then(data => {
      this.setState({
        tableLoading: false
      })
      if (!data.success) {
        message.warn(data.massage || '网络错误！');
        return;
      }
      this.setState({
        tableSource: data.module,
        total: data.totalCount
      });
    })
  }

}
