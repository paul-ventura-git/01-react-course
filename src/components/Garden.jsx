import React from 'react'

function Garden(props) {
  const trees = props.trees;
  return (
    <div> 
      <h3>Garden</h3>
      { trees ? <BigGarden /> : <SmallGarden />}
    </div>
  )
}

function BigGarden() {
  return <p>This garden contains trees! TRUEEEEEEEE</p>;
}

function SmallGarden() {
  return <p>This garden doesn't contain trees! FALSEEEEEE</p>;
}

export default Garden