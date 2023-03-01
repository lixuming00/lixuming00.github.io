import React from 'react';
import { Form, Input,Button } from 'antd';
import {useRouter} from "next/router";

export default function InputComp({handler}) {

  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = values => {
    handler._setData(values);
    form.setFieldsValue({content:''});
  };

  // labelCol={{span:8}} wrapperCol={{span:6}}
  return (
    <div className="wrapper-todo" style={{marginBottom:10}}>
      <Form form={form} onFinish={onFinish} layout={`inline`}>
        <FormItem label={'内容'} name={`content`} >
          <Input placeholder={'请输入内容'} />
        </FormItem>

        <FormItem label={' '}  colon={false}>
          <Button type={`primary`} htmlType={`submit`}>提交</Button>
          <> </>
          <Button type={`default`} onClick={e => router.push('/')}>回到主页</Button>
        </FormItem>
      </Form>
    </div>
  )
}

