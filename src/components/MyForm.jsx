import { useState } from 'react';
import React from 'react'

function MyForm() {
  const [name, setName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
        </input>
      </label>
    </form>
  )
}

export default MyForm