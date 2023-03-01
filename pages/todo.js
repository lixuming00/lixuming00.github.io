import React, { useState } from 'react';
import {} from 'antd';
import { InputComp, ListComp } from "../src/component/todo";

export default function TodoList() {

  const [data, setData] = useState([]);

  const handler = {
    _setData: values => {
      console.log('values', values);
      let arr = [...data];
      for( let i in values) {
        arr.push(values[i]);
      }
      setData(arr);
    },
    _delete: k => {
      console.log('k', k);
      let _data = [...data];
      _data.splice(k, 1);
      setData(_data);
    }
  };

  return (
    <div className="wrapper-todo">
      <InputComp handler={handler} />

      <ListComp data={data} handler={handler} />
    </div>
  )
}