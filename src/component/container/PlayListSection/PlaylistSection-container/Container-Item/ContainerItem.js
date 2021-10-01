import React, { Component } from 'react';
import './ContainerItem.css'
import PictureMusic from './PictureMusic.js'

class ContainerItem extends Component {
    render() {
        return (
            <div>
                <div className="music-item">
                <PictureMusic />

                <div className="">
                    <a href="#section" className="music_name">
                        Music-Name
                    </a>
                    <a href="#section" className="singer-name">
                        single-Name
                    </a>
                </div>
            </div>
                  
            </div>
        );
    }
}

export default ContainerItem;