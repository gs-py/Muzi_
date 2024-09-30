import React from 'react'
import NavBar from './NavBar'
import { songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'

const SongDouble = () => {

     const { id } = useParams()
    const song = songsData[id]
    console.log(song)

  return (
      <div className=' ' >
          
          <NavBar />
          
          <div className=' flex flex-col gap-8 md:flex-row justify-center items-center m-auto   h-full  mt-10 md:mt-20'   >
              <div className=' flex justify-center  h-[250px] w-[250px]'>
              
                  <img src={song.image} alt="" />
              </div>
              <div className='flex flex-col    sm:justify-center'>
                  <h1 className='  font-bold text-[25px]'>{song.name}</h1>
                  <p>{ song.desc}</p>
              </div>
              

          </div>


    </div>
  )
}

export default SongDouble