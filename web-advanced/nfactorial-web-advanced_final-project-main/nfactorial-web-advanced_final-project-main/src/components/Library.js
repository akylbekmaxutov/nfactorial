import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
    songs, 
    setSongs,
    setCurrentSong, 
    audioRef, 
    isPlaying,  
    libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? `active-library` : ''}`}>
            <h2>Сөздер</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                    songs={songs}
                    setSongs={setSongs} 
                    setCurrentSong={setCurrentSong} 
                    song={song} 
                    id={song.id} 
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    />
                ))};
            </div>
        </div>
    )
}

export default Library;