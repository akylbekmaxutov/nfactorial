import React from 'react';
import { playAudio } from '../util';

const LibrarySong = ({
    song, 
    songs, 
    setSongs,
    setCurrentSong, 
    id, 
    audioRef, 
    isPlaying}) => {
    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        playAudio(isPlaying, audioRef);
        setCurrentSong(selectedSong[0]);
        audioRef.current.play();
        
    }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}/>
            <div className='song-description'>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;