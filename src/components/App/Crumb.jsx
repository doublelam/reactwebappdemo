import { Breadcrumb } from 'antd';
export const Crumb = props => (
  <div style={{padding: 3}}>
    <Breadcrumb>
      {props.data.map(v => <Breadcrumb.Item>{v}</Breadcrumb.Item>)}
    </Breadcrumb>
  </div>
);
