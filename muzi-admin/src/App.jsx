
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MusicManagementTabs from './components/MusicManagementTabs'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AddSong from './pages/AddSong';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import AddAlbum from './pages/AddAlbum';
function App() {
  
  return (
    
    <>
      {/* <MusicManagementTabs /> */}
      
      <div className=' flex items-start min-h-screen'>
        <ToastContainer />
        <div className=' flex-1 h-screen overflow-y-scroll bg-white '>
          <div>
            
            <Routes>
            
              <Route path='/add-song' element={ <AddSong />} />
              <Route path='/add-album' element={ <AddAlbum />} />
              <Route path='/list-album' element={ <ListAlbum />} />
              <Route path='/list-song' element={<ListSong />} />
            
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
