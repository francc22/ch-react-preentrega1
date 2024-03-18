


import React from 'react'


interface GreetingProps {
    message: string
}



const Greeting: React.FC<GreetingProps> = ({ message }) => {
  return (
    <div className="border p-5 border-danger">
        <p>Componente hijo</p>
        { message }
    </div>
  )
}

export default Greeting