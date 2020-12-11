import React from 'react'
import AuthLayout from './AuthLayout'
import { Form, Input, Checkbox, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../state'
import useBlockLoginUser from '../../hooks/useBlockLoginUser'

export default function Signup() {
  useBlockLoginUser();
  const dispatch = useDispatch()
  const onFinish = ({name}) => {
    const email = `${name}${EMAIL_SUFFIX}`
    dispatch(actions.fetchSignup(email))
  }
  return (
      <AuthLayout onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Please input your email!" },
          ]}
        >
          <Input
            autoFocus
            prefix={<UserOutlined className="site-form-item-icon" />}
            addonAfter={EMAIL_SUFFIX}
            placeholder=""
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{width:'100%'}}
          >
            receive the email for auth
          </Button>
          Or <Link to="/login">login</Link>
        </Form.Item>
      </AuthLayout>
  )
}


const EMAIL_SUFFIX = '@company.com'