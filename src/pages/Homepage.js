import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppTheme } from '../lib/app_theme';


export class Homepage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <h1>
                    React Application
                </h1>
                <hr/>
                </header>
                <body>
                    <a href='/editavailability'><button>Edit Availability</button></a>
                    <a href='/bookyourappointment'><button href='/bookyourappointment'>Book Your Appointment</button></a>
                </body>
            </div>
        )
    }
}

export default Homepage
