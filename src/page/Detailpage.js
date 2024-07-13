import React from 'react';
import { useParams } from 'react-router-dom';

// useParams: 파라미터값 호출
const Detailpage = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>Show Products Detail {id}</h1>
    </div>
  )
}

export default Detailpage
