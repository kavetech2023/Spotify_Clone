import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albums } from '../assets/assets.js';
import { songs } from '../assets/assets.js';
import SongItem from './SongItem.jsx';

const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts:</h1>
            <div className='flex overflow-auto'>
            {albums.map((item, index) => (<AlbumItem key={index} image={item.cover} name={item.title} desc={item.artist} id={item.id} />))}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits:</h1>
            <div className='flex overflow-auto'>
            {songs.map((item, index) => (<SongItem key={index} image={item.cover} name={item.title} desc={item.artist} id={item.id} />))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome