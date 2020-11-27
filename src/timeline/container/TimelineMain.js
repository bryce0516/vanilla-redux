import React, {useEffect, useReducer} from 'react'
import store from '../../common/store'
import {getNextTimeline} from '../../common/mockData'
import { addTimeLine } from '../state'
import TimelineList from '../component/TimelineList';

export default function TimelineMain() {
  const [,forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate())
    return () => unsubscribe()
  }, [])
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeLine(timeline))
  }
  console.log('TimelinMain render')
  const timelines = store.getState().timeline.timelines;
  console.log(timelines)
  return (
    <div>
      <p>this is timelines</p>
      <button onClick={onAdd}>add timeline</button>
      <TimelineList timelines={timelines}/>
    </div>
  )  
}
