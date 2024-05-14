import React from 'react'

function Football() {
    const shoot = (a) => {
        //alert(a)
        console.log(a)
    }
    return (
        <button onClick={()=>shoot("It's been shot")}>Take the shot!</button>
    )
}

export default Football