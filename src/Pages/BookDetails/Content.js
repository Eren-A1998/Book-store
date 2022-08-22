import React from 'react'

export default function Content(props) {
  return (
    <div className="bg-Lightpink min-h-screen p-10 lg:p-20">
      <div className='bg-white rounded-3xl px-5 lg:px-20 py-10'>
        <div>
            <p className='font-bold text-2xl'>Booxy</p>
        </div>

        <div className='grid grid-cols-3 py-10'>
          <div className='flex justify-center'>
            <img className='h-60 w-52 rounded-md mb-3 shadow-2xl' src={props.BooksDetails.results[0].formats[`image/jpeg`]}/>
          </div>

          <div className='col-start-2 col-span-3'>
            <h1 className='font-bold mb-3 leading-5 font-serif text-2xl'>{props.BooksDetails.results[0].title}</h1>
            <p className='text-gray-500 font-sans mb-8'>{props.BooksDetails.results[0].authors[0].name} (author)</p>
            

            {props.BooksDetails.results[0].subjects.length !== 0 &&
              <>
                <p className='font-bold mb-5 leading-5 font-serif text-2xl'>Subjects :</p>
                <div className='pl-3 mb-8'>
                  {props.BooksDetails.results[0].subjects.map(itm=>{
                    return(
                      <div>
                        <p>{itm}</p>
                      </div>
                    )
                  })

                  }
                </div>
              </>
            }

           { props.BooksDetails.results[0].bookshelves.length !==0 &&
            <>
              <p className='font-bold mb-5 leading-5 font-serif text-2xl'>BookShelves :</p>
              <div className='pl-3'>
                {props.BooksDetails.results[0].bookshelves.map(itm=>{
                  return(
                    <div>
                      <p>{itm}</p>
                    </div>
                  )
                })

                }
              </div>
            </>
          }

          </div>

        </div>

      </div>
    </div>
  )
}
