import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Content(props) {
    const navigate=useNavigate()

    useEffect(()=>{
        console.log(props.AllBooksData)
    },[])

  return (
    <div className="bg-Lightpink p-10 lg:p-20">
        <div className='bg-white rounded-3xl px-5 lg:px-20 py-10'>

            <div>
                <p className='font-bold text-2xl'>Booxy</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center gap-y-16 gap-x-10 py-10'>
                {props.AllBooksData.results.map(itm=>{
                    return(
                        <div onClick={()=>{navigate(`/Books/${itm.id}`)}} className='justify-center w-full cursor-pointer' key={itm.id}>
                            <img  className='h-52 w-full rounded-md mb-3 shadow-2xl hover:scale-100 transition ease-in-out delay-50 hover:-translate-y-3' src={itm.formats[`image/jpeg`]}/>
                            <div className='w-full'>
                                <p className='font-medium text-sm'>{itm.title}</p>
                                <p className='text-gray-500 text-xs'>By {itm.authors[0] !== undefined ? itm.authors[0].name : ''}</p>
                            </div>              
                        </div>
                    )
                })}
            </div>

            
            <div className='flex justify-between'>
                <div>
                    {props.AllBooksData.previous !== null &&<button onClick={()=>props.getPrev()}>PrevPage</button>}
                </div>
                <div>
                    {props.AllBooksData.next !== null  && <button onClick={()=>props.getNext()}>NextPage</button>}
                </div>
            </div>

        </div>
    </div>
  )
}
