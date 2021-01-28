import React, {createContext} from 'react';
export const AuthContext=createContext()
class AuthContextProvider extends React.Component{
  state={
    isLoggedIn:false
  }
  switchAuthState=()=>{
    this.setState({
      isLoggedIn:!this.state.isLoggedIn,
    })
  }
render(){
  return(
    <AuthContext.Provider value={{...this.state,toggleAuth:this.switchAuthState}}>
      {this.props.children}
    </AuthContext.Provider>
  )
}
}
export default AuthContextProvider;