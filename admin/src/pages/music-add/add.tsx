import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/es/upload'
import { uploadConfig, addMusic, editeMusic } from '../../utils/api'
import { useQuery } from '../../utils/index'

import './index.scss'
const { TextArea } = Input
const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
}
function AddMusic (props: any) {
  const [music, setMusic] = useState<any>({
    ...props.music
  })
  useEffect(() => {
    setMusic({...props.music})
    console.log(props.music)
  }, [props.music])
  const query = useQuery()
  const posterUploadConfig = {
    name: 'file',
    ...uploadConfig(),
    onChange(info:UploadChangeParam) {
      if (info.file.response && info.file.response.code) {
        message.success(info.file.response.message)
        setMusic({...Object.assign(music, {poster: info.file.response.result})})
      }
    }
  }
  const musicUploadConfig = {
    name: 'file',
    ...uploadConfig(),
    onChange(info:UploadChangeParam) {
      if (info.file.response && info.file.response.code) {
        setMusic({...Object.assign(music, {url: info.file.response.result})})
      }
    }
  }

  function handleSubmit () {
    let id = query.get('id')
    id ? edit({
      lyrics: music.lyrics,
      name: music.name,
      poster: music.poster,
      title: music.title,
      url: music.url
    }, id) : add()
  }

  async function add () {
    const {data} = await addMusic(music)
    if (data.code) {
      message.success(data.message)
      props.history.push('/music')
    }
  }

  async function edit (values: any, id:string) {
    const { data } = await editeMusic(id, values)
    if (data.code) {
      message.success(data.message)
      props.history.push('/music')
    }
  }

  function inputChange(key: string, e: any) {
    setMusic({...Object.assign(music, {[key]: e.target.value})})
  }

  return (
    <Form onFinish={handleSubmit} layout='horizontal' {...formItemLayout} className="addProject">
      <Form.Item label="??????" rules={[{ required: true, message: '???????????????!' }]}>
        <Input value={music.title} placeholder="???????????????" onChange={e => inputChange('title', e)} />
      </Form.Item>
      <Form.Item label="??????" rules ={[{ required: true, message: '???????????????!' }]}>
        <Input value={music.name} placeholder="???????????????" onChange={e => inputChange('name', e)} />
      </Form.Item>
      <Form.Item label="??????" rules={[{ required: true, message: '???????????????!' }]}>
        <TextArea value={music.lyrics} rows={10} placeholder="???????????????" onChange={e => inputChange('lyrics', e)} />
      </Form.Item>
      <Form.Item label="????????????"  rules={[{ required: true, message: '?????????????????????!' }]}>
          <Input value={music.poster} placeholder="?????????????????????" onChange={e => inputChange('poster', e)} />
          <Upload {...posterUploadConfig}>
            <Button type="link" icon={<UploadOutlined />}>??????????????????</Button>
          </Upload>
      </Form.Item>
      <Form.Item label="????????????" rules={[{ required: true, message: '?????????????????????!' }]}>
        <Input value={music.url} placeholder="?????????????????????" onChange={e => inputChange('url', e)} />
        <Upload {...musicUploadConfig}>
          <Button type="link" icon={<UploadOutlined />}>??????????????????</Button>
        </Upload>
      </Form.Item>
      <div  className="btnbox">
        <Button type="primary" htmlType="submit">??????</Button>
      </div>
    </Form>
  )
}

export default AddMusic
