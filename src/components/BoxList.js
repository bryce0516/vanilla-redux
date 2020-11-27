import React ,{ useRef, useState}from 'react'

export default function BoxList() {
  const BOX_LIST = [
    {id: 1, width: 70, name: 'first'},
    {id: 2, width: 100, name: 'second'},
    {id: 3, width: 80, name: 'thrid'},
    {id: 4, width: 100, name: 'fourth'},
    {id: 5, width: 90, name: 'fifth'},
    {id: 6, width: 80, name: 'sixth'},
    {id: 7, width: 120, name: 'seventh'},
  ];
  
  const boxListRef = useRef({})
  const [rightId, setRightId] = useState(undefined)
  function onClick(){
    let rightBox = 0;
    for (const box of BOX_LIST){
      const ref = boxListRef.current[box.id]
      if(ref){
        const rect = ref.getBoundingClientRect();
        if( rightBox < rect.right){
          rightBox = rect.right
          setRightId(box.id)
        }
        console.log(rect)
      }
    }

  }

  return (
    <div>
      <div
        style={{
          display:'flex',
          flexWrap: 'wrap',
          width:'100vw',
          height:'100%'
        }}
      >
        {BOX_LIST.map(item => (
          <div
            key={item.id}
            ref={ref => (boxListRef.current[item.id] = ref)}
            style={{
              flex:'0 0 auto',
              width: item.width,
              height:100,
              backgroundColor:'rgba(238, 228, 218, 0.35)',
              border:'solid 4px #776e65'
            }}
          >{`${item.name} Box`}</div>
        ))}
      </div>
      <button onClick={onClick}>this is right side</button>
      <p>{rightId !== undefined ? `${rightId} is the right box` : null}</p>
    </div>
  )
}

