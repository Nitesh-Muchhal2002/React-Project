import React from "react";
import User from "./User";

const UserContextProvider=({children})=>{
     const[user,setUser]=React.useState(null)
     return (
      <User.Provider value={{user, setUser}}>
      {children}
      </User.Provider>
     )
}
export default UserContextProvider