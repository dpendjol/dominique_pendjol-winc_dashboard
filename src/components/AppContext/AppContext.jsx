import React from 'react';
import { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [state, setState] = useState(
    {
      difficulty: true, 
      fun: true, 
      lineChart: false, 
      selectMultiple: false, 
      sortBy: 'default', 
      sortOrder: true, 
      filterByName: false, 
      filterName: '',
      filterByAssignment: false,
      filterAssignment: '',
      students: [],
    }
  )

  return <AppContext.Provider value={{
    state, 
    setState,
    }}>{props.children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }