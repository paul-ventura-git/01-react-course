import React from 'react';

function Baseball() {
  const shoot = (a, b) => {
    alert(b.type);
		/*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  }

  return (
    <button onClick={(event) => shoot("Home run!", event)}>Take the shot!</button>
  );
}

export default Baseball