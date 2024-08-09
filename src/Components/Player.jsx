import React, { useContext } from 'react'
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { FaStop } from "react-icons/fa";
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

    const {seekBar, seekBg, playStatus, play, pause} = useContext(PlayerContext);

  return (
    <div className='h-[10%] backdrop:bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src='https://via.placeholder.com/150' alt='album' className='w-12'/>
           <div>
                <p>Song Name</p>
                <p>Song Description</p>
           </div>
        </div>


        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <span className='w-4 cursor-pointer'><FaShuffle /></span>
                <span className='w-4 cursor-pointer'><MdSkipPrevious /></span>
                <span className='w-4 cursor-pointer'><MdSkipNext /></span>
                <span onClick={play} className='w-4 cursor-pointer'><IoMdPlay /></span>
                <span onClick={pause} className='w-4 cursor-pointer'><FaStop /></span>
            </div> 
            <div className='flex items-center gap-5 '>
                <p>1:06</p>
                <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'> 
                    <hr ref={seekBar} className='h-1 border-none w-10 bg-green-800 rounded-full'/>
                </div>
                <p>3:20</p>
            </div>
        </div>

        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <span className='w-4'>plays</span>
            <span className='w-4'>mic</span>
            <span className='w-4'>queue</span>
            <span className='w-4'>spk</span>
            <span className='w-4'>vol</span>
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
        </div>

    </div>
  )
}

export default Player