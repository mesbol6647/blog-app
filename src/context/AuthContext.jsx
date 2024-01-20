import React,{useContext, createContext} from 'react'



const AuthContext= createContext();
 
function useAuth() {
    return useContext(AuthContext)
}


const AuthContextProvider = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContextProvider