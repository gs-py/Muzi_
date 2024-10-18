import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Album } from '@mui/icons-material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

import wavsound from '../assets/wave-sound.png'

const Sidebar = () => {
    const navigate = useNavigate()
  return (
      <div className=' bg-black/100  text-cyan-100 h-screen flex flex-col  '>
          <div className='mx-auto h-[20%] pt-5'>
              Muzi 
              <img src={wavsound} alt=""  className='w-7 inline-block ml-5'/>
          </div>
          <div className=' flex  justify-center items-center flex-grow pb-[20vh]'>
          
              <div className=' flex flex-col items-center   justify-center gap-2  '>
                  <div className=''>Menu</div>
                  <Button onClick={() => navigate('/add-song')}  className='w-[130px]'>Add Song  <LibraryMusicIcon className='pl-2 ml-1'/> </Button>
                  <Button onClick={() => navigate('/add-album')} className='w-[130px]'>Add Album <Album  className='pl-2 ml-1' /></Button>
                  <Button onClick={() => navigate('/list-song')} className='w-[130px]'>List Song <QueueMusicIcon className='pl-2 ml-1'  /> </Button>
                  <Button onClick={() => navigate('/list-album')} className='w-[130px]'>List Album <LibraryBooksIcon className='pl-2 ml-1' /></Button>
          
              </div>
              </div>
      </div>
  )
}

export default Sidebar