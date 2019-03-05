import React, { Component } from 'react';

import styles from './styles/Panel';


export default class Panel extends Component{
    constructor() {
        super();
        this.state = {
            hovered: false,
        };
    }

    render(){
        return(
            <div style = {{...styles.panel, opacity: this.state.hovered?0.9:0.2}}
            onMouseEnter={() => {
                this.setState({hovered: true});
            }}
            onMouseLeave={() => {
                this.setState({hovered: false});
            }}>
                <p style = {{...styles.header, opacity: this.state.hovered?1:0}}>HOAX</p>
            </div>
        )
    }
}