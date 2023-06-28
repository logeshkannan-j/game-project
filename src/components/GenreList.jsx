import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function GenreList() {
    const [genreList, setGenrelist] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        getGenrelist();
    })
    const getGenrelist = () => (
        GlobalAPI.getGenrelist.then((resp) => {
            console.log(resp.data.results);
            setGenrelist(resp.data.results);
        }
        )
    )
    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white '>GenreList</h2>
            {genreList.map((item, index) => (
                <div
                onClick={() => setActiveIndex(index)}
                className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg ${
                  activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : ''
                }`}
              >
                <img
                  src={item.image_background}
                  className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                    activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : ''
                  }`}
                  alt={item.name}
                />
                <h3 className='dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300'>
                  {item.name}
                </h3>
            </div>
    ))
}
        
        </div >
  )
}

export default GenreList