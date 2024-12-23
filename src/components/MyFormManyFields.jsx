import { useState } from 'react'
import React from 'react'

function MyFormManyFields() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value})); // {atr1: "valor1", atr2: "valor2"}
    console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Soy " + inputs.username + " y tengo " + inputs.age + " años.");
  }

  return (
    <form onSubmit={handleSubmit} style={{padding:"10px"}}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

export default MyFormManyFields