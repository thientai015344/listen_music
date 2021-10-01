import React from 'react'
import './PictureMusic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'
export default function PictureMusic() {
   
    return (
        <div>
            <div className="music-picture">
                <a href="#" className="music-picture--link">
                    <img className="music-picture--img" src="./img\musicPicture/musicPicture_1.png" alt=""/>
                </a>  
                <button className="icon" onClick={() => this.props.setIsPlaying(!props.isPlaying)}>
                        <FontAwesomeIcon icon ={this.props.isPlaying ? faPause : faPlay} />
                    </button>
                {/* <div className="opacity">
                </div>            */}
            </div>
            
            
        </div>
    )
}
