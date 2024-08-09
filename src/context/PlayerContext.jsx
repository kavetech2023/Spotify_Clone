import { createContext, useEffect, useRef, useState } from "react";
import { songs } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const seekBg = useRef();
    const seekBar = useRef();
    const audioRef = useRef();

    const [track, setTrack] = useState(songs[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState();    

    const play =() =>{
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause =() =>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () =>{
                setTime({currentTime:{
                    second:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }})
            }
        },1000);

    },[audioRef])

    const contextValue ={
    
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,play,pause

    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;