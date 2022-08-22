import React, { useEffect, useState } from 'react'
import Content from './Content';

export default function AllBooks() {
  const [Books,SetBooks]=useState({})

  useEffect(()=>{
    fetch('http://gutendex.com/books/')
    .then((response) => response.json())
    .then((data) => SetBooks(data));
  },[])


  const GetNextPage=()=>{
    fetch(Books.next)
    .then((response) => response.json())
    .then((data) => SetBooks(data));   
  }

  const GetPrevPage=()=>{
    fetch(Books.previous)
    .then((response) => response.json())
    .then((data) => SetBooks(data));   
  }


  // useEffect(()=>{
  //  console.log(Books,Object.keys(Books).length)
  // },[Books])

  return (
    <div>
      {Object.keys(Books).length !== 0 ?
        <Content getNext={()=>GetNextPage()} getPrev={()=>GetPrevPage()}  AllBooksData={Books}/>
        :
        <div className='flex justify-center my-5'>
          <p>loading....</p>
        </div>
      }
    </div>
  )
}

