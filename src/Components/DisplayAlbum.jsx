import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albums, songs } from '../assets/assets'
import { ImSpotify } from "react-icons/im";
import { CiClock2 } from "react-icons/ci";

const DisplayAlbum = () => {

    const {id} = useParams();
    const album = albums[id];

  return (
    <>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className="w-48 rounded" src="" alt="" />
            <div className='flexflex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.title}</h2>
                <h4>{albums.artist}</h4>
                <p className='mt-1'>
                    <span className='inline-block w-5 '><ImSpotify /></span>
                    <b>spotify</b>
                    . 1,000,000 likes
                    . <b>50 songs</b>
                    about 2 hr 30 mins
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <span className='m-auto w-4'><CiClock2 /></span>
        </div>
        {
            songs.map((item, index) => (
                <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='inline e-10 mr-5' src={item.cover} alt="" />
                        {item.title}
                    </p>
                    <p className='text-[15px]'>{item.artist}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum