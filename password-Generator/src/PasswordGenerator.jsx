import React, { useState, useCallback, useEffect, useRef } from 'react';

function PasswordGenerator() {
  const [lengthofpass, setLengthofpass] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  //useRef Hook
  const passwordRef = useRef(null)
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


    if (numAllowed) str += '0123456789';
    if (charAllowed) str += "!@#$%^&*()_+{}[]";

    for (let i = 1; i <= lengthofpass; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass)

  }, [lengthofpass, numAllowed, charAllowed, setPass]);

  useEffect(() => {
    generatePassword()
  }, [lengthofpass, charAllowed, numAllowed, PasswordGenerator])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 32);
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  return (
    <div className='max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-600'>
      <h1 className='text-white text-center mb-4 '> Password Generator</h1>
      <div className='text-green-600 flex shadow rounded-lg overflow-hidden mb-4 '>

        <input type='text' value={pass} className='outline-none w-full py-1 px-6' placeholder='Password' readOnly ref={passwordRef}>
        </input>

        <button
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 focus:ring focus:ring-cyan-300 pr-3 px-3 py-0.5 shrink-0 rounded transition duration-200'>
          Copy
        </button>


      </div>
      <div className='flex text-sm gap-x-3 text-green-300 '>

        <div className='flex item-center gap-x-1 ' >
          <input type='range' min={6} max={32} value={lengthofpass} className='cursor-pointer' onChange={(e) => { setLengthofpass(e.target.value) }} />
          <label>Length :{lengthofpass}</label>
        </div>

        <div className='flex item-center gap-x-1 ' >
          <input type='checkbox' defaultValue={numAllowed} id='numberInput' onChange={() => {
            setNumAllowed((prev) => !prev)

          }} /><lable>Numbers</lable>
        </div>

        <div className='flex item-center gap-x-1 ' >
          <input type='checkbox' defaultValue={charAllowed} id='charInput' onChange={() => {
            setCharAllowed((prev) => !prev)

          }} /><lable>Character</lable>
        </div>

      </div>
    </div>
  )
}

export default PasswordGenerator;
