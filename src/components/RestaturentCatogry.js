import React, { useState } from 'react'

import ListOfItem from './ListOfItem';
const RestaturentCatogry = ({data}) => {

    const [showitem,setshowitem]=useState(false);
const tukaram=data?.card?.card;
const handleClick=()=>{
setshowitem(!showitem);
}
console.log(tukaram?.itemCards)
return (
    <div>

<div   onClick={handleClick}   className="flex w-full mb-6 font-bold text-lg justify-between bg-gradient-to-r from-gray-50 via-indigo-50 to-gray-100 p-4 rounded-lg shadow-md">
                <p>{tukaram.title} ({tukaram?.itemCards?.length})</p>


<img    src="https://www.svgrepo.com/show/520696/down-arrow-5.svg"    className="w-6 h-6           " alt="down arrow" />


              </div>

{showitem && <ListOfItem data={tukaram?.itemCards} />
}


    </div>




)
}
export default RestaturentCatogry;