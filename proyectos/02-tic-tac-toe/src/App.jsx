import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}



const Square = ({ children, updateboard, index }) => {
  return (
    <div className='square'>
      
        {children}
     
    </div>
  )
}



function App() {

  const [board, setBoard] = useState(['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'])

  

  return (
    <main className='board'>
    <h1>tic tac toe</h1>
    <section className='game'>
      {board.map((_, index) => {
        return (
          <Square key={index} index={index}>
            {board[index]}
          </Square>

        )
      })}

    </section>
    </main>
)
 
}

export default App
