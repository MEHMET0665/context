import React from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
class TodoList extends React.Component{
  static contextType=ThemeContext;
  render(){
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme ? lightTheme : darkTheme;
    return(
      <div className='todolist'style={{backgoundColor:theme.title}}>
      <input type="text"/>
      <ul>
        <li>Go to market</li>
        <li>Get some milk</li>
        <li>Pay the bill</li>
      </ul>
      </div>
      )
    }
  }
export default TodoList