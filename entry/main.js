import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component{
  render(){
    return <h1>111</h1>
  }
}

let TTitle = ({title}) => <h1>{title}</h1>

ReactDOM.render(<TTitle title="React"/>, document.getElementById('root'))

