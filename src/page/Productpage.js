import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Productpage = () => {
  let [query, setQuery] = useSearchParams();
  console.log('ddd', query.get('q'))  //쿼리에다 q값 가져오기
  return (
    <div>
      <h1>Show All Products!</h1>
    </div>
  )
}

export default Productpage
