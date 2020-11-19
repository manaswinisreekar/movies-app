import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
//import { Card } from '@material-ui/core';


class Header extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="pink">
                    Login
                </Button>
            </div>
        )
    }
}

export default Header; 
