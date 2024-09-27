import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const {id} = useParams()
    const albumData = albumsData[id]
    const {playWithId } = useContext(PlayerContext)
   
  return (
      <>
          <NavBar />
          <div className="mt-10 flex gap-5 flex-col md:flex-row md:items-end ">
              <img className=' w-48' src={ albumData.image} alt="" />
          <div className="flex flex-col">
            <p>playlist</p>
                  <h2 className="mb-4 text-5xl font-bold ">{ albumData.name}</h2>
                  <h4>{ albumData.desc}</h4>
                  <p className=''>
                      <img className=' inline-block w-5 mr-2' src={assets.spotify_logo} alt="" />
                      <b className=' inline-block'>10 Songs</b>
                  </p>
          </div>
          </div>

          <div className="flex justify-between 
 mt-10 mb-4 pl-2 text-[#a7a7a7] md:w-[500px]">
              <p className=''><b className="md:mr-10  ">#
              </b> Title
              </p>
 
             
              <img className=" w-6  " src={assets.clock_icon} />
        </div>
<hr />
{songsData.map((item, index) => (
  <div key={index} onClick={()=>playWithId(item.id)} className="flex flex-row justify-between gap-4 p-2 items-center md:w-[500px] hover:bg-[#25251b]  cursor-pointer">
    {/* Song title and index */}
        <div className="text-white  flex gap-6">
            <b className=" text-[#a7a7a7]">{index + 1}

            </b>
            
            <img className=" hidden sm:block w-10 " src={item.image} />

            <p className='bold sm:w-20'>
                {item.name}   
            </p>
        </div>

    
        

   
        <p className="text-[15px]">{item.duration}      
        </p>

  </div>
          ))}

      </>
  )
}

export default DisplayAlbum