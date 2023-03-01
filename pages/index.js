import React from 'react';
import { useSession, signOut } from "next-auth/react";
import { Button } from 'antd';
import { useRouter } from 'next/router';

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {

  const router = useRouter();
  const {data: session} = useSession({
    required: true
  });

  /**
   * @解决退出或未授权访问页面时闪烁的第一种方式
   * 向页面返回一个空白
   * */
  if (!session) {
    return <></>;
  }

  return (
    <div className={`wrapper-index`}>
      <h1>index page</h1>
      <pre>
        {
          JSON.stringify(session)
        }
      </pre>

      <div>
        <Button type={`primary`} onClick={e => router.push('/todo')}>列表页面</Button>
        <> </>
        <Button type={`primary`} onClick={e => router.push('/device')}>设备管理</Button>
        <> </>
        <Button type={`primary`} onClick={e => signOut()}>退出</Button>
      </div>
    </div>
  )
}

/**
 * @解决页面闪烁或访问未授权页面时闪烁的第二种方式
 * 引入 unstable_getServerSession
 * 引入 authOptions
 * */
export async function getServerSideProps(ctx) {

  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  };
}

