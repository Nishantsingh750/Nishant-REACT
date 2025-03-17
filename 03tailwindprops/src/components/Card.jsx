import React from 'react'

function cards({username,data="just trying",image}){
 
  // let name=props.username
  // let para=props.data
  return (
    <div>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
             {data }
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}

export default cards