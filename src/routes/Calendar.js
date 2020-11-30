import React,{useState} from 'react'
import CalendarFrame from '../calendar/container/CalendarFrame'
import { useSelector,useDispatch } from 'react-redux'
import useCalendar from '../calendar/hooks/useCalendar'
export default function Calendar() {
  const { calendarRows, selectedDate, todayFormatted, days, monthNames, getNextMonth, getPrevMonth} = useCalendar();
  
  const dispatch = useDispatch();

  return (
    <>
    <div className="container" style={{justifyContent:'center', display:'flex'}}>
      <CalendarFrame calendarRows={calendarRows} selectedDate={selectedDate} todayFormatted={todayFormatted} days={days} getNextMonth={getNextMonth} getPrevMonth={getPrevMonth} monthNames={monthNames}/>
    </div>
    </>
  )
}
