import { useState, useRef, useEffect } from 'react';
import './buttonmus.css'
import logo from './icon-note.png'
import backgroundMusic from './timer_mus_2.WAV'

export default function ButtonMus(){
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(backgroundMusic);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;
        
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handleClick = () => {
        if (!isPlaying) {
            audioRef.current.pause();
        } else {
            if (audioRef.current.currentTime === audioRef.current.duration) {
                audioRef.current.currentTime = 0;
            }
            audioRef.current.play().catch(error => {
                console.error("Error playing:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return(
        <button 
            className={`button-play-mus ${isPlaying ? 'crossed' : ''}`}
            onClick={handleClick}
            aria-label={isPlaying ? "Выключить музыку" : "Включить музыку"}>
            <img src={logo} className='icon-button' alt="Звук"></img>
        </button>
    )
}