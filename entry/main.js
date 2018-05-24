import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../basicComponents/Button'

class Title extends Component{
  render(){
    return (<div>
      <Button onClick={()=> console.log(111)} type="dangerous">123</Button>
    </div>)
  }
}


ReactDOM.render(<Title title="React"/>, document.getElementById('root'))

