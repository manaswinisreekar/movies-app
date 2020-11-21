import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextareaAutosize } from '@material-ui/core';


//Styles//

const customStyles={
    content:{
        top:'50%',
        left:'50%',
        Right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translates(-50%,50%)'


    }


}


class Header extends Component {
    constructor(){
        super();
    this.state={
        modalIsOpen:false,
         value:0
    };
    }
 openModalHandler=()=>
     this.setState=({modalIsOpen:true})

 closeModal=()=>
 this.setState=({modalIsOpen:false})

 tabChangeHandler=(event,value)=>{
     this.setState({value});

 }

 


    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                    <div className="login-button">
                        <Button variant="contained" color="default"onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal ariaHideapp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                 onRequestclose={this.closeModalHandler}
                 style={customStyles}>

                </Modal>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login"/>
                    <Tab label="Signup"/>

                </Tabs>
            </div>
        )
    }

}   

        
    

    
    


export default Header;
