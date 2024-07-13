import React from 'react';
import { Link } from 'react-router-dom'; //Route간의 이동하는 역할

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to ='/about'>Go to AboutPage</Link> 
    </div>
  )
}

export default Homepage
