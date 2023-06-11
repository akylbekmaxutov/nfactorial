import React, {useState, useRef} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import './styles/app.scss';
import data from './data';


function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration});
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
      <audio 
                onTimeUpdate={timeUpdateHandler} 
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
