import React from 'react'
import { useState } from 'react';
import { useRouteError ,} from 'react-router-dom';
const ErrorHandle = () => {
  const err=useRouteError();
  const use=useState();
    return (
    <div>
      <h1 className='  ml-12 text-2xl mt-4 font-bold '>Ooops Something Went Wrong!!! </h1>
      <h3 className=' ml-12 '>Try Again...</h3>
<h4>{err.error.message}{err.statusText}</h4>
    </div>
  )
}

export default ErrorHandle;