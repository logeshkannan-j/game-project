import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalAPI from '../Services/GlobalAPI'
import Banner from '../components/banner';
   export default function Home() {
  const [ allGameList,setAllGameList]=useState();

  useEffect(()=>{
  getAllGamesList();
  },[])
  const getAllGamesList=()=> {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
    });
  }
  return (
    <div className='grid grid-cols-4 '>
    <div className='hidden md:block bg-full '>
    <GenreList/>
      </div>
    <div className='col-span-4 md:col-span-3'>
    {allGameList?.length > 0 ? <Banner gameBanner={allGameList[0]} /> : null}
      </div>
    </div>
  )
}


