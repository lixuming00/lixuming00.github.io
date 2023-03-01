import React from 'react';
import { List } from 'antd';

export default function TodoList({data, handler}) {
  return (
    <div className="wrapper-todo">
      <List bordered
            locale={{emptyText: ''}}
            dataSource={data}
            renderItem={(item,k) => {
              return (
                <List.Item onClick={e => handler._delete(k)}>
                  {item}
                </List.Item>
              )
            }}
            header={<div>header</div>}
            footer={<div>footer</div>} />
    </div>
  )
}

