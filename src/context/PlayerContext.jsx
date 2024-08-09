import { createContext, useRef, useState } from "react";
import { songs } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const seekBg = useRef();
    const seekBar = useRef();
    const audioRef = useRef();

    const [track, setTrack] = useState(songs[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({currentTime:{
        second:0,
        minute:0
    },
    totalTime:{
        second:0,
        minute:0
    }});    

    const play =() =>{
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause =() =>{
        audioRef.current.pause();
        setPlayStatus(false);
    }


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