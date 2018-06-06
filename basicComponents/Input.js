import React,{ Component } from 'react'
import classnames from '../extraMethods/classnames'
import '../static/input.css'

export default (props) => {
  return  <input className={classnames('input', props.type||'default').concat(props.className||"")} {...props} />
}

// export default class Input extends Component{
//   render(){
//     return <input className={classnames('input', this.props.type||'default').concat(this.props.className||"")} {...this.props} />
//   }
// }