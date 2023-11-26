import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ParticipantList from './Components/ParticipantList'
import ParticipantCreate from './Components/ParticipantCreate'
import ParticipantDetails from './Components/ParticipantDetails'
import ParticipantEdit from './Components/ParticipantEdit'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ParticipantList />}></Route>
          <Route
            path="/participant/create"
            element={<ParticipantCreate />}
          ></Route>
          <Route
            path="/participant/detail/:id"
            element={<ParticipantDetails />}
          ></Route>
          <Route
            path="/participant/edit/:id"
            element={<ParticipantEdit />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
