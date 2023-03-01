import React, { useState, useEffect } from 'react';
import { Table } from "antd";
import { COLUMNS, DATA } from "./config";
import axios from "axios";

const device_uri = 'http://api.mudianit.com/index.php';

export default function Main() {

  const [data, setData] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        // const configs = {
        //   url: device_uri,
        //   params: {
        //     m: 'api',
        //     c: 'index',
        //     a: 'equipmentList',
        //     user: 'shoulian',
        //     token: '620cb5eb8a5bc8b0e9cb3578fec2896f',
        //     pageSize: 200,
        //     page: 1,
        //   }
        // };
        // const result = await axios(configs);

        const result = await fetch(
          `${device_uri}?m=api&c=index&a=equipmentList&user=shoulian&token=620cb5eb8a5bc8b0e9cb3578fec2896f&pageSize=10&state=0`);
        const res = await result.json();
        console.log('res', res)
      } catch (e) {
        console.log('e', e)

      }
    })()
  }, []);

  const handler = {};

  return (
    <div className={`wrapper-device-main`}>
      <Table columns={COLUMNS} bordered dataSource={DATA} />
    </div>
  )
}
