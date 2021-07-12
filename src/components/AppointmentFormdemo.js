import React, {Component, useState} from "react"
import {TextField, Button, Card, CardActions, CardHeader, CardContent,Collapse, Typography, Divider, FormControl, FormControlLabel, FormGroup, FormLabel,IconButton, List, Switch, Tab, Tabs} from '@material-ui/core';
import blue300  from "material-ui/styles/colors";
import './AppointmentForm.css'
import { AppTheme } from '../lib/app_theme';
import {MuiThemeProvider} from 'material-ui/styles';

import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import CalendarPicker from '@material-ui/lab/CalendarPicker';
import MonthPicker from '@material-ui/lab/MonthPicker';
import YearPicker from '@material-ui/lab/YearPicker';
import Grid from '@material-ui/core/Grid';

export class AppointmentFormdemo extends Component {

    accountAssessors=["Accessor 1","Accessor 2","Accessor 3","Accessor 4","Accessor 5","Accessor 6","Accessor 7","Accessor 8","Accessor 9"]
    
    state={
        dateofappointment: '',
        residence:'',
        accessorSelected: '',
        startTime: '',
        endTime:''
    }
    
    continueSelect = e => {
        // console.log(document.getElementById('listCard'));
        document.getElementById('listCard').style.opacity=1;
        e.preventDefault();
    }
    handleClick = input => e => {
        console.log(e);
        console.log(input)
        console.log(new Date(this.state.dateofappointment).toString().split(' '))
        this.setState({
            'accessorSelected': input
        })
        console.log(this.state);
        document.getElementById('calendarCard').style.opacity=1;
    }

    handleChange = input => e =>{
        console.log(e.target.value);
        this.setState({[input]: e.target.value})
    }
    dayClick = e =>{
        console.log(e)
        const startTime = new Date(e.start).toString().split(' ')
        const endTime = new Date(e.end).toString().split(' ')
        console.log(startTime[4])
        console.log(endTime[4])
        this.setState({'endTime':endTime[4],'startTime':startTime[4]})
    }
    handleRadio = input => e =>{
        console.log(e.target.value);
    }
    

    render() {
        
        const date = new Date();
        const minDate = new Date();
        const maxDate = new Date('2034-01-01T00:00:00.000');
        minDate.setDate(minDate.getDate() + 3);
        console.log(date)
        const { step } = this.state;
        const { dateofappointment, accessorSelected, slotSelected } = this.state;
        const values = { dateofappointment, accessorSelected, slotSelected }
        const accounts = this.accountAssessors;
        const accountsList = accounts.map((num)=><li>{num}</li>);
        const selectionRange={
            startDate: new Date(values.dateofappointment),
            endDate: new Date(values.dateofappointment),
        }
        const selectedDay =  new Date(this.state.dateofappointment).toString().split(' ')
        const days = { 1:'Mon', 2:'Tue', 3:'Wed', 4:'Thu', 5:'Fri', 6:'Sat',7:'Sun'};
        const hidden = [0]
        for(let i = 0; i<1; i++)
            {
                console.log(selectedDay[0])
                if(selectedDay[0]=='Invalid'){
                    console.log("null date")
                    break
                }
                const content = selectedDay[i]
            for (let index = 1; index < 7; index++) {
                const element = days[index];
                if(element == content)
                    {

                    }
                else{
                    hidden.push(index)
                } 
            }
            break   
        }
        
        return(

            <MuiThemeProvider theme={AppTheme}>
                <Card style={styles.leftcard}>
                <h2>Select the date for your appointment</h2>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} style={styles.calendarGrid}>
                            <CalendarPicker  defaultValue={minDate} minDate={minDate} maxDate={maxDate}  onChange={(newDate) => alert(newDate)} />
                        </Grid>
                        
                    </Grid>
                </LocalizationProvider>
                <Button style={styles.dateSelect}>
                    Continue
                </Button>
                </Card>
                <Card style={styles.rightTopCard}>
                    <h2>Face-to-Face Appointment</h2>
                    <div>
                        <h3>Get the next appointment</h3>
                        <Button>Book now</Button>
                    </div>
                    <div style={{display:'inline-block'}}>
                        <h3>Book your own time</h3>
                        <div>
                        <label class="slot" id="labelId1" onClick={this.handleRadio('labelId1')}>
                            <span><b>9AM - 11AM</b><input class="inputClass" type="radio" value="9AM" name="slot"/></span>
                            
                        </label>
                        <label class="slot" id="labelId2" onClick={this.handleRadio('labelId1')}>
                            <span><b>11AM - 1PM</b><input class="inputClass" type="radio" value="11AM" name="slot"/></span>
                            
                        </label>
                        <label class="slot" id="labelId3" onClick={this.handleRadio('labelId1')}>
                            <span><b>1PM - 3PM</b><input class="inputClass" type="radio" value="1PM" name="slot"/></span>
                            
                        </label>
                        <label class="slot" id="labelId4" onClick={this.handleRadio('labelId1')}>
                            <span><b>3PM - 5PM</b><input class="inputClass" type="radio" value="9AM" name="slot"/></span>
                            
                        </label>
                        </div>
                        <Button style={styles.confirmBooking}>
                        Confirm Booking
                    </Button>
                    </div>
                    
                </Card>
                <Card style={styles.rightBottomCard}>
                    <h2>Telephone Appointment</h2>

                    <div>
                        <h3>Get the next appointment</h3>
                        <Button>Book now</Button>
                    </div>
                    <div style={{display:'inline-block'}}>
                        <h3>Book your own time</h3>
                        <div>
                        <label class="slot" id="labelId1" onClick={this.handleRadio('labelId1')}>
                            <span><b>9AM - 11AM</b><input class="inputClass" type="radio" value="9AM" name="slot"/></span>
                            
                        </label>
                        <label class="slot" id="labelId2" onClick={this.handleRadio('labelId1')}>
                            <span><b>11AM - 1PM</b><input class="inputClass" type="radio" value="11AM" name="slot"/></span>
                            
                        </label>
                        <label class="slot" id="labelId3" onClick={this.handleRadio('labelId1')}>
                            <span><b>1PM - 3PM</b><input class="inputClass" type="radio" value="1PM" name="slot"/></span>
                            
                        </label>
                        <label class="slot" id="labelId4" onClick={this.handleRadio('labelId1')}>
                            <span><b>3PM - 5PM</b><input class="inputClass" type="radio" value="9AM" name="slot"/></span>
                            
                        </label>
                        </div>
                        <Button style={styles.confirmBooking}>
                        Confirm Booking
                        </Button>
                    </div>
                </Card>
            </MuiThemeProvider>
                )
    }
}
const styles = {
    
    leftcard:{
        width:"49.5%",
        float:'left',
        textAlign:'center'
    },
    calendarGrid:{
        paddingLeft:0,
        marginLeft:'auto',
        marginRight:'auto'
    },
    dateSelect:{
        marginBottom:25
    },
    confirmBooking:{
        margin:25,
        border:'1px solid #fff',
    },
    rightTopCard:{
        width:"49.5%",
        float:'right',
        textAlign:'center',
        marginBottom:10
    },
    rightBottomCard:{
        width:"49.5%",
        float:'right',
        textAlign:'center'
    }
    
}

export default AppointmentFormdemo
