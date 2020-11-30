import React, {useEffect, useReducer} from 'react'
import store from '../../common/store'
import {getNextFriend} from '../../common/mockData'
// import { addFriend, setAgeLimit, setShowLimit, setValue } from '../state'
import { addFriend, setValue } from '../state'
import FriendList from '../component/FriendList';
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { getAgeLimit, getShowLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit } from '../selector';

export default function FriendMain() {
  // using only redux
  // const [,forceUpdate] = useReducer(v => v + 1, 0);
  // useEffect(() => {
  //   let prevFriends = store.getState().friend.friends
  //   const unsubscribe = store.subscribe(() => {
  //     const friends = store.getState().friend.friends;
  //     if(prevFriends !== friends){
  //       forceUpdate()
  //     } 
  //     prevFriends = friends
  //   })
  //   return () => unsubscribe()
  // }, [])

  // using useSelector
//  const friends = useSelector(state => state.friend.friends)
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit
  ] = useSelector ( state => [
    getAgeLimit(state),
    getShowLimit(state),
    getFriendsWithAgeLimit(state),
    getFriendsWithAgeShowLimit(state),
  ], shallowEqual)

  const dispatch = useDispatch()
  function onAdd() {
    dispatch(setValue('name', 'mike'))
    const friend = getNextFriend();
    store.dispatch(addFriend(friend))
  }
  console.log('FriendMain render')
  // const friends = store.getState().friend.friends;
  return (
    <div>
      <p>this is FriendMain</p>
      <button onClick={onAdd}>add Friend</button>
      <NumberSelect 
        // onChange={v => dispatch(setAgeLimit(v))}
        onChange={v => dispatch(setValue('ageLimit', v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect 
        // onChange={v => dispatch(setShowLimit(v))}
        onChange={v => dispatch(setValue('ageLimit', v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  )  
}

const AGE_LIMIT_OPTIONS = [15,20,25, MAX_AGE_LIMIT]
const SHOW_LIMIT_OPTIONS = [2,4,6, MAX_SHOW_LIMIT]