import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
import BootstrapComponent from './components/BootstrapComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClassComponent from './components/ClassComponent'
import Navigation from './components/Navigation'
import Fetch from './components/Fetch'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          {/* <ClassComponent subTitle="First example" subTitleColor="blue" />
        <ClassComponent subTitle="Another example" /> */}
          {/* <FunctionalComponent subTitle="First example" subTitleColor="blue" /> */}
          <Routes>
            <Route path="/" element={<BootstrapComponent />} />
            <Route
              path="/class"
              element={<ClassComponent subTitle="another route!" />}
            />
            <Route
              path="/function"
              element={<FunctionalComponent subTitle="another one" />}
            />
            <Route path="/fetch" element={<Fetch />} />
          </Routes>
          <Navigation />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
