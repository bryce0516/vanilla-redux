import React, { useState } from 'react'
import Profile from '../components/Profile'
import WidthPrinter from '../components/WidthPrinter'

export default function User() {
  const [userId, setUserId] = useState(0)
  return (
    <>
      <Profile userId={userId}/>
      <button onClick={() => setUserId(userId + 1)}>userId 변경</button>
      <WidthPrinter />
    </>
  )
}
