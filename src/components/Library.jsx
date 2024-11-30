import React from 'react'

function Library() {
  const genres = [
    {id:1, description: "Science fiction"}, 
    {id:2, description: "Comedy"},
    {id:3, description: "History"},
    {id:4, description: "Thrillers"}
  ];
  return (
    <>
      <h3>What have I got in my library?</h3>
      <ul>
        {genres.map((genre) => <Genre key={genre.id} description={genre.description} />)}
      </ul>
    </>
  )
}

function Genre(props) {
  return <li>I have {props.description} books.</li>
}

export default Library