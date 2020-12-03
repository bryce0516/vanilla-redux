import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tag, Input, message } from "antd";
import { actions } from "../state";
import { PlusOutlined } from "@ant-design/icons";
export default function TagList() {
  const [isAdd, setIsAdd] = useState(false);
  const [tempTag, setTempTag] = useState('');
  const user = useSelector(state => state.people.people);
  const tags = user?.tag ? user.tag.split(',').map(item => item.trim()) : [];
  const dispatch = useDispatch()

  function onAdd(){
    setIsAdd(true)
    setTempTag('')
  }

  function onSave(){
    if (!tempTag) {
      setIsAdd(false);
    } else if (tags.includes(tempTag)){
      message.error('there is a same tag.')
    } else {
      const newTag = user?.tag ? `${user.tag}, ${tempTag}` : tempTag;
      dispatch(
        actions.fetchUpdatePeople({
          people:user,
          key:'tag',
          value:newTag,
          fetchKey:'tag'
        }),
      )
      setIsAdd(false)
    }
  }
  function onDelete(tag) {
    const newTag = tags.filter(item => item !== tag).join(', ');
    dispatch(
      actions.fetchUpdatePeople({
        people:user,
        key:'tag',
        value:newTag,
        fetchKey:'tag'
      }),
    )
  }

  return <>
    {tags.map(item => (
      <Tag key={item} closable onClose={() => onDelete(item)}>{item}</Tag>
    ))}
    {!isAdd && <Tag onClick={onAdd}>
      <PlusOutlined /> New Tag
    </Tag>}
    {isAdd && (
      <Input 
        ref={ref => ref && ref.focus()}
        type="text"
        size='small'
        style={{ width:100 }}
        value={tempTag}
        onChange={e => setTempTag(e.target.value)}
        onBlur={() => setIsAdd(false)}
        onPressEnter={onSave}
      />
    )
    
    
    
    }
  </>
}
