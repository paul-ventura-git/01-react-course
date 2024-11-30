import React from 'react';

function Baseball() {
  const shoot = (a, b) => {

    alert(a.type + b.type);
		/*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  }

  return (
    <button onClick={(event) => shoot("Home run!", event)}>Baseball button!</button>
  );
}

export default Baseball