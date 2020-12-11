import React from 'react'
import {Col, Row, Typography, Form} from 'antd'


/**
 * 
 * @param {object} param
 * @param {() => void} param.onFinish
 * @param {import('react').ReactNode} param.children
 */

export default function AuthLayout({children, onFinish}) {
  return (
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{fontFamily:'Caligraphy'}}>Poke Time's</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" >
        <Col>
          <Form
            initialValues={{ remember: true }}
            style={{width:400, marginTop:30}}
            onFinish={onFinish}
          >
          {children}
          </Form>
        </Col>
      </Row>
    </>
  )
}