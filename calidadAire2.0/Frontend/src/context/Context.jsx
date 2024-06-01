import React, { createContext, useState} from 'react';


export const MyContext = createContext();

export function Context  (props)  {  
  const [data, setData] = useState();
  

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
};

