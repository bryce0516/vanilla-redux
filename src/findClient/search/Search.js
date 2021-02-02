import React, { useEffect, useState } from 'react'
import {Row, Col, Typography} from 'antd'
import Settings from '../component/Settings'
import SearchInput from '../component/SearchInput'
import People from '../../routes/People'
import History from '../../people/component/History'
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../state'
import useNeedLogin from '../../hooks/useNeedLogin'
import { actions as authActions } from '../../auth/state'
export default function Search() {
  const [number, setNumber] = useState(0)
  useNeedLogin();
  const history = useSelector(state => state.search.history)
  const historyState = useSelector(state => state.search.allPage)
  console.log('history search State',historyState)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAllHistory())
    dispatch(actions.fetchPagination())
  }, [])
  function logout(){
    dispatch(authActions.fetchLogout());
  }
  return (
    <React.Fragment>
      <Row justify="end" style={{padding: 20, display:'flex',justifyContent:'flex-end'}}>
        <Col><Settings logout={logout}/></Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100, display:'flex', justifyContent:'center'}}>
        <Col>
          <Typography.Title style={{fontFamily:'Caligrahhy'}}>find Client</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col lg={40} md={16} xs={12}><SearchInput /></Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col lg={40} md={16} xs={12} ><History items={history} /></Col>
      </Row>
      {/* <People /> */}
      <Row justify="center" style={{ marginTop: 50 }}>
      <Col lg={40} md={16} xs={12} >this is page numbers</Col>
      </Row>
    </React.Fragment>
  )
}
 //