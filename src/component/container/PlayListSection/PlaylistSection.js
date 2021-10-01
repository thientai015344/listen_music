import React, { Component } from 'react';
import Container from './PlaylistSection-container/Container.js';
import './PlaylistSection.css';


class PlaylistSection extends Component {
    render() {
        return (
            <div>
                <div className="playlistSection">
                <Container />
               
                </div>
                
            </div>
        );
    }
}

export default PlaylistSection;