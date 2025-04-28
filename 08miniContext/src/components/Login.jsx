import React,{useState, useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {
const [username, setUsername] = useState('')
const [Password, setPassword] = useState('')

const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault ()
        setUser({username, Password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
       placeholder='username'/><br/>
       {"  "}
    
      <input type='password' 
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      placeholder='password'/><br/>

      <button onClick={handleSubmit} style={{backgroundColor:'purple'}}>Submit</button>
    </div>
  )
}

export default Login
