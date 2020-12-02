import React, { useEffect } from 'react'
import { Row, Col, PageHeader, Descriptions, Typography } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../people/state'
import User from './User'

/**
 * 
 * @param {object} param
 * @param {import('react-router').match} param.match 
 */


export default function People({ match}) {
  const name = match.params.name
  const history = useHistory()
  const dispatch = useDispatch()
  const people = useSelector(state => state.people.people)
  console.log('people',people)
  useEffect (() => {
    dispatch(actions.fetchPeople(name))
  },[name])

  const isFetched = true


  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={history.goBack}
          title="userInfo"
        >
         {people && (
           <Descriptions layout="vertical" bordered column={1}>
            <Descriptions.Item label="name">
              <Typography.Text>{people.name}</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="department">
              {people.department}
            </Descriptions.Item>
            <Descriptions.Item label="tag">
              {people.tag}
            </Descriptions.Item>
            <Descriptions.Item label="revision record">
              revision record
            </Descriptions.Item>
           </Descriptions>
         )}
         {!people && isFetched && (
           <Typography.Text>존재하지 않는 사용자입니다.</Typography.Text>
         )}
        </PageHeader>
      </Col>
    </Row>
  )
}
