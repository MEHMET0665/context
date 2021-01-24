import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    lightTheme: {text: '#000', title: '#9EA7AA', nav: '#CFD8DC', body:'#ECEFF1'},
    darkTheme: {text: '#FFF', title: '#4f5b62', nav: '#37474f', body:'#263238'},
    isLoggedIn:false
  }
switch =()=> {
  this.setState({
    isLightTheme:!this.state.isLightTheme
  })
}
log =()=> {
  this.setState({
    isLoggedIn:!this.state.isLoggedIn
  })
}
  render() {
    return (
      <ThemeContext.Provider value={{...this.state,toggle:this.switch,log:this.log}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;