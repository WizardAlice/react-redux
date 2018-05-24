import React, { Component } from 'react'
import classnames from '../extraMethods/classnames'
import '../static/button.css'

export default class Button extends Component{
  render(){
    return <button className={classnames('button', this.props.type||'default').concat(this.props.className||"")} {...this.props}>
      {this.props.children}
    </button>
  }
}