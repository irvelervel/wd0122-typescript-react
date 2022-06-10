import React from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ClassComponent subTitle="First example" subTitleColor="blue" />
        <ClassComponent subTitle="Another example" />
      </div>
    </div>
  )
}

export default App
