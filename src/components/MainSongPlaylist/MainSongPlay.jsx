import Footer from '../Footer'
import Library from '../Library/Library'
import Navbar from '../Navbar'
import PlaySong from './PlaySong'

const MainSongPlay = () => {
  return (
    <div>
        <Navbar />
        <div className="flex gap-1">
             <Library />
        <PlaySong />
        
        </div>
        
       
    
      
    </div>
  )
}

export default MainSongPlay
