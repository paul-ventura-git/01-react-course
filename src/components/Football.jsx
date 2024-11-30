import React from 'react'

function Football() {
  
    const shoot = (a) => {
        alert(a)
    }

    return (
        <button onClick={()=>shoot("It's been shot")}>Football button!</button>
    )
}

export default Football