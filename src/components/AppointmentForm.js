import React, {Component} from "react"
import {TextField, Button, Card, CardActions, CardHeader, CardContent,Collapse, Typography, Divider, FormControl, FormControlLabel, FormGroup, FormLabel,IconButton, List, Switch, Tab, Tabs} from '@material-ui/core';
import blue300  from "material-ui/styles/colors";

import { AppTheme } from '../lib/app_theme';
import {MuiThemeProvider} from 'material-ui/styles';
import logo from "./logo192.png";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeekPlugin from '@fullcalendar/list';
import listMonthPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class AppointmentForm extends Component {

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
        // alert('Clicked on: ' + date.format());

        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        // alert('Current view: ' + view.name);
    }
    

    render() {
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
                <Card style={styles.fullCard}>
                <div style={styles.appointmentDateDiv}>
                    <h1> Select Date of Appointment</h1>
                    <div style={styles.appointmentDate}>
                    <span style={styles.dateTextSpan}>
                    <TextField style={styles.dateTextfield}
                     type="date" 
                        id="dateofappointment" 
                        label="Appointment date"
                        name="date1"
                        onChange={this.handleChange('dateofappointment')}
                        defaultValue={values.dateofappointment}
                        InputLabelProps={{
                            shrink: true,
                            required:true
                          }}
                           />
                           </span>
                           <span style={styles.placeTextSpan}>
                           <TextField type="text" sttyle={styles.placeTextField}                           
                           id="placeOfResidence"
                           label="Place of Residence"
                           name="placeofresidence"
                           onChange={this.handleChange('residence')}
                           InputLabelProps={{
                            shrink: true,
                            required:true
                          }}/></span>
                        </div>

                    <Button 
                        label = "Continue"
                        style={styles.button}
                        onClick={this.continueSelect}
                        >Continue</Button>

                </div>
                <Card id="listCard" style={styles.leftcard} disabled>
                    <Card style={styles.accessorListCard}>
                    <CardContent>
                        <List>
                            {   
                                accounts.map((accountAssessor) => {

                                    return (
                                        <Button style={styles.AccessorButton} id={accountAssessor} onClick={this.handleClick(accountAssessor)}>
                                        <div style={styles.Accessorline}>
                                            <div id="avatar" style={styles.avatar}><img style={styles.image} src={logo}/></div>
                                            <h3 style={styles.Typo}>{accountAssessor}</h3>
                                        </div>
                                        </Button>

                                    )
                                    })
                            }
                        </List>
                    </CardContent>
                    </Card>
                </Card>
                <Card id="calendarCard" style={styles.rightCard}>
                            <FullCalendar
                                hiddenDays={hidden}
                                eventTimeFormat={{ // like '14:30:00'
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                }}
                                select={this.dayClick}
                                selectable={true}
                                selectMirror={true}
                                dayMaxEvents={true}
                                navLinks={true}
                                headerToolbar={{
                                    left: '',
                                    center: 'title',
                                    right: 'timeGridDay'
                                }}
                                
                                plugins={[
                                    timeGridPlugin,
                                    interactionPlugin
                            ]}/>
                            
                </Card>
                <a href="/confirmAppointment">
                <Button 
                    type="submit"
                        label = "Continue"
                        style={styles.submitButton}
                        onClick={this.continue}
                        >Continue</Button></a>
                </Card>
            </MuiThemeProvider>
                )
    }
}
const styles = {
    fullCard:{
        textAlign:'center'
    },
    disabled:{
        disabled: true
    },
    button: {
        margin: 15,
        backgroundColor: blue300,
    },
    submitButton:{
        marginTop:50,
        marginBottom:50
    },
    appointmentDateDiv:{
        textAlign:'center'
    },
    appointmentDate:{
        width:'33%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    placeTextField:{
        marginBottom:0,
        // paddingTop:50,
        marginLeft:15
    },
    dateTextField:{
        marginRight:15
    },
    leftcard:{
        width:"50%",
        height:500,
        overflowY:'auto',
        // maxHeight:'300px',
        float:'left',
        opacity:0.4
    },
    rightCard:{
        float:'right',
        width:'50%',
        height:500,
        // maxHeight:300,
        overflow:'auto',
        opacity:0.4
    },
    accessorListCard:{
    },
    avatar:{
        float:'left',
        
    },
    image:{
        width:40,
        height:40,
    },
    Accessorline:{
        display:'flex'
    },
    AccessorButton:{
        width:'100%',
        display:'initial',
    },
    Typo:{
        padding:5,
        margin:0
    },
    dateTextSpan:{
        marginRight:15
    },
    placeTextSpan:{
        marginLeft:15
    }
    
}

export default AppointmentForm
