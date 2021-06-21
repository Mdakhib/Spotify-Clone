import React from 'react'
import '../styles/player.css'
import Sidebar from "./Sidebar";
import Body from './Body';
import Footer from './Footer';

function Player() {
    return (
        <div className='player'>
            <div className="player__body">
                {/* sidebar */}
                <Sidebar />
                {/* body */}
                <Body />
            </div>
            <Footer />
            {/* footer */}
        </div>
    )
}

export default Player
