import React, { useState } from 'react'
import { actions } from '../state'
import instance from '../../axios/api'
// import AdminList from '../component/AdminList'
import { useSelector, useDispatch } from 'react-redux'

export default function AdminMain() {
  const dispatch = useDispatch();
   // const customers = useSelector(state => state.customer.customers)
  const onAdd = async () => {
    let email='test@test.com'
    let password='qwert12345'
    const response  = await instance.post('/signin', {email,password})
    // const customer = await jsonserver.get("/blogpost")
    console.log(response)
    // dispatch(actions.addCustomer(customer))
  }
  
  return (
    <div>
      <button onClick={onAdd}>add customer</button>
      {/* <AdminList customers={customers}/> */}
    </div>
  )
}
