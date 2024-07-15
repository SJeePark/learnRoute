import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; //Route 간의 이동하는 역할

const Homepage = () => {
  const navigate = useNavigate()
  const goProductPage= ()=>{
    navigate('/products?q=pants')
  }

  return (
    <div>
      <h1>Homepage</h1>
      <Link to ='/about'>Go to AboutPage</Link> 
      <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage
