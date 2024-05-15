import React from 'react'

function Garden(props) {
  const trees = props.trees;
  return (
    <div>Garden
      { trees ? <BigGarden /> : <SmallGarden />}
    </div>
  )
}

function BigGarden() {
  return <h1>This garden contains trees!</h1>;
}

function SmallGarden() {
  return <h1>This garden doesn't contain trees!</h1>;
}

export default Garden