import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class Dashboard extends Component {
    render() {
        return (
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
        )
    }
}
export default Dashboard;
