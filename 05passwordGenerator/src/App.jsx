import { useState, useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef=useRef(null)

 // const passwordGenerator = () => { }

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!#$%^&*(){}[]?></+_="

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipbord=useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])




  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800">
  <h1 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h1>

  <div className="flex shadow rounded-lg overflow-hidden w-full">
    <input 
      type="text"
      value={password}
      className="outline-none w-full py-2 px-3 text-gray-800"
      placeholder="password"
      readOnly
      ref={passwordRef}
    />
    <button onClick={copyPasswordToClipbord} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div>
    <div className="flex text-sm gap-x-2">
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(Number(e.target.value));
        }}
        />
        <label>Length : {length }</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>

      <div className="flex items-ceneter gap-x-1">
      <input
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={() => {
          setcharAllowed((prev) => !prev);
        }}
        />
      </div>
      <label htmlFor='characterInput'>Characters</label>

    </div>
  </div>

    </>
  )
}

export default App
