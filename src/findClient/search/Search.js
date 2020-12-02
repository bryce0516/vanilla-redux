import React from 'react'
import {Row, Col, Typography} from 'antd'
import Settings from '../component/Settings'
import SearchInput from '../component/SearchInput'
import People from '../../routes/People'
import 'antd/dist/antd.css';
export default function Search() {
  return (
    <React.Fragment>
      <Row justify="end" style={{padding: 20, display:'flex',justifyContent:'flex-end'}}>
        <Col><Settings logout={() => {console.log('clicked')}}/></Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100, display:'flex', justifyContent:'center'}}>
        <Col>
          <Typography.Title style={{fontFamily:'Caligrahhy'}}>find Client</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}><SearchInput /></Col>
      </Row>
      {/* <People /> */}
    </React.Fragment>
  )
}
 
