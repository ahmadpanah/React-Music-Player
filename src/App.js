import {useState, useEffect} from 'react'
import Player from './components/Player';

function App() {
  
  const [songs] = useState ([

    {
      title: "Darya",
      artist: "Mohsen EbrahimZade",
      img_src: "./images/mohsen-ebrahimzadeh.jpg",
      src:"./music/Mohsen Ebrahimzadeh - Darya.mp3"
    },
    {
      title: "Divanegi",
      artist: "Ragheb",
      img_src: "./images/ragheb.jpg",
      src:"./music/Ragheb - Divanegi.mp3"
    },
    {
      title: "Tamoome Shahr",
      artist: "Masih Arash",
      img_src: "./images/masiharash.jpg",
      src:"./music/Masih & Arash - Tamoome In Shahr.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect (() => {
    setNextSongIndex( () => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  
  return (
    <div className="App">
       <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
       />
    </div>
     
  );
}

export default App;
