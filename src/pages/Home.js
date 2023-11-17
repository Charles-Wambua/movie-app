import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/movies">Movies</Link>
      <Link to="/series">series</Link>
      <Link to="/">Movies</Link>
    </div>
  )
}

export default Home
