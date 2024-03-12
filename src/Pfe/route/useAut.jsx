import React, { useContext } from 'react'
import { userContext } from '../UserContext';

function useAut() {

  const {user}=useContext(userContext);
console.log(user);
  return (
    user?.token||"guest"
  )
}

export default useAut