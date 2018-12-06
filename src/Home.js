import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Signout from './components/Signout';
import Google from './components/Google';


class Home extends Component {
    render() {
        console.log("this0", this.props)
        return (


            <div className="App">
                <h1>
                    Get started with the Social login
          </h1>
                <div className="signout">
                    <Signout />
                </div>
                <div className="facebook">
                    <p> Or Login with </p>
                    <Facebook />
                </div>
                <div className="google">
                    <Google />
                </div>
                <div className="dashboard">
                    {/* <Dashboard /> */}
                </div>
            </div>
        );
    }
}

export default Home;
