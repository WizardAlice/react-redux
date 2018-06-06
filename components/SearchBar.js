import React from 'react'
import Button from '../basicComponents/Button'
import Input from '../basicComponents/Input'
// import '../static/search_bar.css'

export default (props) => {
  return <div className={props.className}>
    <Input />
    <Button type="primary">搜索</Button>
  </div>
}