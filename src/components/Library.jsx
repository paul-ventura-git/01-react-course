import React from 'react'

function Genre(props) {
  return <li>I have {props.description} books.</li>
}

function Library() {
  const genres = [
    {id:1, description: "Science fiction"}, 
    {id:2, description: "Comedy"},
    {id:3, description: "History"},
  ];
  return (
    <>
      <h1>What have I got in my library?</h1>
      <ul>
        {genres.map((genre) => <Genre key={genre.id} description={genre.description} />)}
      </ul>
    </>
  )
}

export default Library