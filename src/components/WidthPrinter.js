import React from 'react'
import useWidthPrinter from '../hooks/useWidthPrinter'

export default function WidthPrinter() {
  const width = useWidthPrinter();
  return (
    <div>
      {`width is ${width}`}
    </div>
  )
}
