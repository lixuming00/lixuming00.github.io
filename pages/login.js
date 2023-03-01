import React, { useState } from 'react';
import { Button, Form, Input, Alert } from "antd";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";


export default function Login() {

  const [pageState, setPageState] = useState({error: '', processing: false});
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const router = useRouter();

  /*处理数据提交*/
  const onFinish = values => {
    // console.log('values',values);
    setPageState(old => ({...old, error: '', processing: true}));
    signIn('credentials', {
      ...values,
      redirect: false
    }).then(response => {
      // console.log('response', response);
      if (response.ok) {
        router.push('/');
      } else {
        setPageState(old => ({...old, error: response.error, processing: false}));
      }
    }).catch(error => {
      // console.log('error', error);
      setPageState(old => ({...old, error: error.message ?? 'something went wrong', processing: false}));
    })
  };

  const errorMessage = error => {
    const errorMap = {
      CredentialsSignin: '用户名或密码有误',
    };
    return errorMap[error] ?? '未知错误';
  };

  return (
    <div className={`wrapper-login`}>
      <Form form={form} labelCol={{span: 8}} wrapperCol={{span: 8}} onFinish={onFinish}>
        {/*账号*/}
        <FormItem label={`账号`} name={`username`}>
          <Input placeholder={`请输入账号`} />
        </FormItem>

        {/*密码*/}
        <FormItem label={`账号`} name={`password`}>
          <Input placeholder={`请输入账号`} type={`password`} />
        </FormItem>

        {/*提交按钮*/}
        <FormItem label={` `} colon={false}>
          <Button type={`primary`}
                  htmlType={`submit`}
                  block
                  disabled={pageState.processing}
          >
            提交
          </Button>
        </FormItem>

        {/*错误显示*/}
        {
          pageState.error !== '' && <FormItem label={` `} colon={false}>
            <Alert message={errorMessage(pageState.error)} type={`error`} />
          </FormItem>
        }

      </Form>
    </div>
  )
}

