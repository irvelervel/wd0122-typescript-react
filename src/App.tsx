import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
import BootstrapComponent from './components/BootstrapComponent'
// import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <ClassComponent subTitle="First example" subTitleColor="blue" />
        <ClassComponent subTitle="Another example" /> */}
        {/* <FunctionalComponent subTitle="First example" subTitleColor="blue" /> */}
        <BootstrapComponent />
      </div>
    </div>
  )
}

export default App
