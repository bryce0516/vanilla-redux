import React, {useEffect, useReducer,useState} from 'react'
import store from '../../common/store'
import {getNextTimeline} from '../../common/mockData'
import { actions, types } from '../state'
import TimelineList from '../component/TimelineList';
import { useSelector, useDispatch } from 'react-redux';

export default function TimelineMain() {
  // using only redux
  // const [,forceUpdate] = useReducer(v => v + 1, 0);
  // useEffect(() => {
  //   let prevTimelines = store.getState().timeline.timelines;
  //   const unsubscribe = store.subscribe(() => {
  //     const timelines = store.getState().timeline.timelines;
  //     if(prevTimelines !== timelines){
  //       forceUpdate()
  //     }
  //     prevTimelines = timelines
  //   })
  //   return () => unsubscribe()
  // }, [])

  // using useSelector
  const [currentText, setCurrentText] = useState('');
  const text = useSelector(state => state.timeline.text)
  const dispatch = useDispatch();
  const timelines = useSelector(state => state.timeline.timelines);
  const isLoading = useSelector(state => state.timeline.isLoading);
  const error = useSelector(state => state.timeline.error)
  function onAdd() {
    const timeline = getNextTimeline();
//    store.dispatch(addTimeLine(timeline))
    dispatch(actions.addTimeLine(timeline))
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    dispatch(actions.requestLike(timeline))
  }
  function onChangeText(e){
    const text = e.target.value;
    dispatch(actions.trySetText(text));
    setCurrentText(text);
  }
  console.log('TimelinMain render', text)
  // const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <p>this is timelines</p>
      <button onClick={onAdd}>add timeline</button>
      <TimelineList timelines={timelines} onLike={onLike}/>
      {isLoading && <p>is loading ...</p>}
      {!!error && <p>에러 발생:{error}</p>}
      <input type="text" value={currentText} onChange={onChangeText}/>
      {!!text && <p>{text}</p>}
    </div>
  )  
}
