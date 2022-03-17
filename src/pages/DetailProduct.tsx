import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

const DetailProduct = (props: Props) => {
  const {id} = useParams();
  console.log(id);
  
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct