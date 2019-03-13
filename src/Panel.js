import React, { Component } from 'react';

import styles from './styles/Panel';
import TextInput from './TextInput';
import Button from './Button';



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
                <p style = {styles.header}>HOAX</p>
                <TextInput placeholder=" Email" />
                <TextInput placeholder=" Password" />
                <TextInput placeholder=" Name" />
                <Button label="Sign Up" />
                <div style={styles.placeholder} />

                <div style={styles.footer}>
                    <p style={styles.footer_text}>Already have an account?</p>
                    <p style={styles.footer_link}>Login</p>
                </div>

                
            </div>
        )
    }
}