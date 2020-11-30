import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker';
import { times, indexOf } from 'lodash';

CalendarFrame.propTypes = {
  calendarRows: PropTypes.objectOf(PropTypes.array).isRequired,
  selectedDate: PropTypes.object,
  todayFormatted:PropTypes.string,
  days:PropTypes.array.isRequired,
  getNextMonth:PropTypes.func.isRequired,
  getPrevMonth:PropTypes.func.isRequired,
}

export default function CalendarFrame({ calendarRows, selectedDate, todayFormatted, days, getNextMonth, getPrevMonth, monthNames}) {
  return (
    <div className="game-container" style={containerStyle}>
      <div>
        <div style={{position:'absolute', top:'10px',right:'180px', fontSize: 40}}>
          <p>Calendar</p> 
        </div>
        <div style={{position:'absolute', top:'10px',right:'10px', fontSize: 25}}>
          {selectedDate.getFullYear()}
        </div>
        <div style={{position:'absolute', top:'33px',right:'10px', fontSize: 25}}>
          {monthNames[selectedDate.getMonth()]}
        </div>
        <div style={{flexDirection:'column', display:'flex'}}>
          <div style={{flexDirection:'row',display:'flex'}}>       
          {days.map((item,index) =>(
            <div key={index}style={fontStlyle}>
              <p style={{justifyContent:'center', display:'flex'}}>{item}</p>
            </div>
            ))}
          </div>
          <div style={{justifyContent:'center', display:'grid'}}>
            {Object.values(calendarRows).map((cols) => (
              <div key={cols.date} className="grid-row" style={{marginBottom:'0px'}}>
                {cols.map((col) => (
                  <div key={col.date} className="grid-cell" style={cellStyle}>
                    <div style={innerCell}>
                      <p style={{justifyContent:'center'}}>{col.classes === "" ? col.value : null}</p>
                    </div>
                  </div>
                ))}
                </div>   
            ))}
          </div>
        </div>
        <div style={{justifyContent:'center', display:'flex'}}>
          <button className="restart-button" style={buttonStyle} onClick={getPrevMonth}>getPrevMonth</button>
          <button className="restart-button" style={buttonStyle} onClick={getNextMonth}>getNextMonth</button>
        </div>
      </div>
    </div>
  )
}

const fontStlyle={
  justifyContent:'center',
  marginLeft: 11,
  marginRight: 11
}
const containerStyle={
  display:'flex',
  alignItems:'flex-end',
  justifyContent:'center',
  width:'75%'
}

const cellStyle = {
  height:'50px',
  width:'50px',
  justifyContent:'center',
  margin:1
}
const innerCell = {
  height:'100%',  
  justifyContent:'center',
  alignItems:'center',
  display:'flex'
}

const buttonStyle = {
  margin:15,
  cursor:'default',
  float:'left',
  padding:0,
  color:'floralwhite',
  lineHeight:'30px',
}