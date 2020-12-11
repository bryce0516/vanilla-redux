import React from "react";
import { Typography, Row, Col, Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthLayout from './AuthLayout'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../state";
import useBlockLoginUser from '../../hooks/useBlockLoginUser'
export default function Login() {
  const dispatch = useDispatch();
  useBlockLoginUser();

  const onFinish = ({username, password}) => {
    dispatch(actions.fetchLogin(username, password))
  }

  return (

      <AuthLayout onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please input your Username!" },
          ]}
        >
          <Input
            autoFocus
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{width:'100%'}}
          >
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </AuthLayout>

  );
}
