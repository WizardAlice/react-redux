import React from 'react'
import Footer from './Footer'
import SearchBar from './SearchBar'
// import AddTodo from '../containers/AddTodo'

import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <SearchBar /> 
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App