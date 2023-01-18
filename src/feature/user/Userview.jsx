import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUser } from './userSlice'
import ReactLoading from 'react-loading';
export const Userview = () => {
  const user = useSelector((state)=>state.users)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  console.log(user.users[0])
  return (
    <div>
    <h2>List Of Users </h2>
    {user.loading && <ReactLoading color='red' height={267} width={175} />}

    {!user.loading && user.error ? <span>Error: {user.error}</span>: null}

    {!user.loading && user.users.length ? (
      <ol>
        {
          user.users.map(user=>(
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ol>

    ):null}


    </div>
  )
}
