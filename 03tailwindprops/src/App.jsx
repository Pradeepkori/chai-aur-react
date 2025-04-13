import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/card'
import './App.css'

function App() {
  let myobj1 = {
    userName : "Sandeep",
    age: 22,
    userJob: "wireMan",
  }

  let myobj2 = {
    userName : "Sanjeev",
    age: 20,
    userJob: "DataEntry",
  }

  return (
    <> 
       <div className="min-h-screen flex items-center justify-center bg-teal-500 text-white text-4xl p-4">
      Hello guys, <br/><br/> welcome<br/><br/>to <br/><br/>My BotWorld 
      </div>
    <div>
      <h1 className="bg-blue-950">Hi, Employees</h1>
    </div>
    
   <Card userName="Pradeep" userJob="software developer"/>
   <Card userName="Sandeep" userJob="wireMan"/>
   <Card userName="Sanjeev"  userJob="dataEntrynty"/>

    </>
  )
}

export default App
