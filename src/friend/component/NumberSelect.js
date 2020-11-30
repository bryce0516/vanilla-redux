import React from 'react'

export default function NumberSelect({value, options, postfix, onChange}) {
  return (
    <div style={divStyle}>
      <select 
        style={selectStyle}
        onChange={e => {
          const value = Number(e.currentTarget.value)
          onChange(value);
        }}
        value={value}
      >
       {options.map(option => (
         <option key={option} value={option}>
           {option}
         </option>
       ))}
      </select>
      {postfix}
    </div>
  )
}
const divStyle={
  margin: '10px',
  flexDirection:'row',
  display:'flex',
  alignItems:'center'
}

const selectStyle={
  display:'block',
  height:'50%',
  width:'30%'
}