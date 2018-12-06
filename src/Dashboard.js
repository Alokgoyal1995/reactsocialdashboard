import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class Dashboard extends Component {
    render() {
        // console.log("dfd0", this.props.location.state.name)
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="top-nav">
                        <Typography variant="title" color="inherit">
                            Dashboard
                    </Typography>
                        <Typography variant="title" color="inherit">
                            <p className="logout">Logout</p>
                        </Typography>

                    </Toolbar>
                </AppBar>
                <div className="info">
                    <p>Currently Login At Facebook</p>
                    <img src={this.props.location.state.picture} alt={this.props.location.state.name} />
                    <h2>Most welcome, {this.props.location.state.name}</h2>
                    Email: {this.props.location.state.email}
                </div>
            </div>
        )
    }
}
export default Dashboard;
