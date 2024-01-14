import React from 'react'
import { createContext,useState } from 'react'

export const idContext = createContext(null);

const IdProvider = (props) => {

    const [id,setId] = useState(2)
  return (
  <idContext.Provider value={[id,setId]}>
    {props.children}
  </idContext.Provider>
  )
}

export default IdProvider
