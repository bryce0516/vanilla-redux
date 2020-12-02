import React from 'react'
import { AutoComplete, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../state'
export default function SearchInput() {
  const keyword = useSelector(state => state.search.keyword)
  const dispatch = useDispatch()
  function setKeyword(value){
    if(value !== keyword){
      dispatch(actions.setValue('keyword', value))
      dispatch(actions.fetchAutoComplete(value))
    }
  }
  function gotoUser(value) {
    
  }
  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      style={{width:'100%'}}
      options={[]}
      autoFocus
    >
      <Input className="input" size="small" placeholder="input here" prefix={<SearchOutlined/>} />
    </AutoComplete>
  )
}
