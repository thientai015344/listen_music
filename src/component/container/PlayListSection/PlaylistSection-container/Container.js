
import React, { Component } from 'react'
import ContainerItem from './Container-Item/ContainerItem.js';
import './Container.css';

export default class Container extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <h2 className="title">
                  Hôm Nay Nghe Gì
                </h2>
                <ContainerItem />
                
            </div>
                
            </div>
        )
    }
}

