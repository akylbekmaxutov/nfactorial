import React, {useState} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import './styles/app.scss';
import data from './util';


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
      <Library songs={songs}/>
    </div>
  );
}

export default App;
