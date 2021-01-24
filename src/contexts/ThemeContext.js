
import React, {createContext}from'react';

export const ThemeContext=createContext(),
class ThemeContextProvider extends React.Component{
  state={
      isLightTheme:true,
      light:{text:'#000',title:"#9ea7aa;", nav:'#cfd8dc',body:'#eceff1'},
      darkTheme:{text:'#FFF',title:"#4f5b62", nav:'#37474f',body:'#263238'}
    }
  
  render(){
    return(
     <ThemeContext.Provider value={this.state}>
{this.props.children}
     </ThemeContext.Provider>
    )
  }
}
export default ThemeContextProvider