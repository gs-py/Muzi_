
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MusicManagementTabs from './components/MusicManagementTabs'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AddSong from './pages/AddSong';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './components/Sidebar';
import AddAlbum from './pages/AddAlbum';
function App() {
  
  return (
    
    <>
      
      
      <div className=' flex  flex-row'>
        
        
        <div className='  bg-white   min-w-[30vw] md:min-w-[15vw]'>
          <Sidebar/>
          {/* <MusicManagementTabs />  */}
          </div>
        <div className=' w-full'>
         
            <ToastContainer />
            
            <Routes>
            
              <Route path='/add-song' element={ <AddSong />} />
              <Route path='/add-album' element={ <AddAlbum/>} />
              <Route path='/list-album' element={ <ListAlbum />} />
              <Route path='/list-song' element={<ListSong />} />
            
            </Routes>
          </div>
        </div>
      
    </>
  )
}

export default App
