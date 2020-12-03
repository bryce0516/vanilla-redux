import React, { useEffect } from 'react'
import { Row, Col, PageHeader, Descriptions, Typography, Space, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions, types } from '../people/state'
import useFetchInfo from '../hooks/useFetchInfo'
import Department from '../people/component/Department'
import TagList from '../people/component/TagList'
import History from '../people/component/History'
import FetchLabel from '../people/component/FetchLabel'
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
  useEffect (() => {
    dispatch(actions.fetchPeople(name))
  },[dispatch, name])

  const { isFetched, isSlow } = useFetchInfo(types.FetchPeople)


  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={history.goBack}
          title={
            <FetchLabel 
              label="User's info"
              actionType={types.FetchPeople}
            />
          }
        >
         {people && (
           <Descriptions layout="vertical" bordered column={1}>
            <Descriptions.Item label="name">
              <Typography.Text>{people.name}</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item 
              label={<FetchLabel 
              label="department"
              actionType={types.FetchUpdatePeople}
              fetchKey="department"
            />
            }>
              <Department />
            </Descriptions.Item>
            <Descriptions.Item 
              label={<FetchLabel 
              label="tag"
              actionType={types.FetchUpdatePeople}
              fetchKey="tag"
            />
            }>
              <TagList />
            </Descriptions.Item>
            <Descriptions.Item label="revision record">
              <History />
            </Descriptions.Item>
           </Descriptions>
         )}
         {!people && isFetched && (
           <Typography.Text>Sorry, Cannot match any user</Typography.Text>
         )}
        </PageHeader>
      </Col>
    </Row>
  )
}
