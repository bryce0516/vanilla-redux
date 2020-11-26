import {useState, useEffect} from 'react'

export default function useWidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize);
    console.log('useEffect 1')
    return () => {
      window.removeEventListener('resize', onResize)
      console.log('useEffect 2')
    }
  },[])
  return width
}
