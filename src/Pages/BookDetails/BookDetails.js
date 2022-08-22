import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Content from './Content'

export default function BookDetails(props) {
  const [Details,SetDetails]=useState({})
  const {BookId}=useParams()

  useEffect(()=>{
      console.log('BookId',BookId)
      fetch(`http://gutendex.com/books?ids=${BookId}`)
      .then((response) => response.json())
      .then((data) => SetDetails(data));
  },[])


  useEffect(()=>{
    console.log(Details,Object.keys(Details).length)
   },[Details])


  return (
    <div>
      {Object.keys(Details).length !== 0 ?
        <Content  BooksDetails={Details}/>
        :
        <div className='flex justify-center my-5'>
          <p>loading....</p>
        </div>
      }
    </div>
  )
}
