import React from 'react'
import {ThemeContext} from '../contexts/ThemeContext';

class Titlebar extends React.Component{
  static contextType=ThemeContext;
  render(){
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme;
    return(

    <div className='title-bar'style={{backgoundColor:theme.titlebar}}>
      <div className='barnding'>
      <h2>Todo App</h2>  </div>
      <i className="fas fa-moon" onClick={this.context.toggle}></i>
        
     
    </div>
    )
  }
}
export default Titlebar