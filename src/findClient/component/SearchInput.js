import React from 'react'
import { AutoComplete, Input, Typography, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../state'
import { actions as peopleActions} from '../../people/state'
import { useHistory } from 'react-router-dom'


export default function SearchInput() {
  const keyword = useSelector(state => state.search.keyword)
  const dispatch = useDispatch()
  const AutoCompletes = useSelector(state => state.search.autoCompletes)
  const history = useHistory()
  function setKeyword(value){
    if(value !== keyword){
      dispatch(actions.setValue('keyword', value))
      dispatch(actions.fetchAutoComplete(value))
    }
  }
  function gotoUser(value) {
    const people = AutoCompletes.find(item => item.name === value);
    if(people) {
      dispatch(peopleActions.setValue('people', people))
      history.push(`/people/${people.name}`)
    }
  }

  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      style={{width:'100%'}}
      options={AutoCompletes.map(item =>({
        value:item.name,
        label: (
          <Space>
            <Typography.Text strong>{item.name}</Typography.Text>
            <Typography.Text type="secondary">{item.department}</Typography.Text>
            <Typography.Text>{item.tag}</Typography.Text>
          </Space>
        )
      }))}
      autoFocus
    >
      <Input className="input" size="small" placeholder="input here" prefix={<SearchOutlined/>} />
    </AutoComplete>
  )
}
