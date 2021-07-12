import React, { useState, Component } from 'react'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeekPlugin from '@fullcalendar/list';
import listMonthPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {TextField, Button, Card, CardActions, CardHeader, CardContent,Collapse, Typography, Divider, FormControl, FormControlLabel, FormGroup, FormLabel,IconButton, List, Switch, Tab, Tabs} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { AppTheme } from '../lib/app_theme';
import {MuiThemeProvider} from 'material-ui/styles';
import { Availability } from './availability';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const EditAvailabilityComponent = props => {

    const { appointments =[],startTime, endTime, selectedDate } = props;
    const [open, setOpen]=useState(false);
    const [accountState, setAccountState] = useState('');
    const [selectedDate1, setSelectedDate1] = useState(new Date());
    const [startTime1, setStartTime1] = useState(new Date())
    const [endTime1, setEndTime1] = useState(new Date())
    const [startTimestr, setStartTimeStr] = useState(new Date())
    const [endTimestr, setEndTimeStr] = useState(new Date())
    const { london, setLondon } = useState(true)
    const { belfast, setBelfast } = useState(false);
    const { ireland, setIreland } = useState(false);
    const error = [london, belfast, ireland].filter((v) => v).length !== 1;

    function dayClick(e) {
        console.log(e);
        const startTime = new Date(e.start).toString().split(' ')
        const endTime = new Date(e.end).toString().split(' ')
        console.log(startTime[1]+"-"+startTime[2]+"-"+startTime[3])
        document.getElementById('Datetext').value=e.startStr.slice(0,10);
        document.getElementById('startTimeField').value=startTime[4]
        document.getElementById('endTimeField').value=endTime[4]
        console.log(startTime[4])
        console.log(endTime[4])
        this.setState({'selectedDate':e.startStr.slice(0,10),'endTime':endTime[4],'startTime':startTime[4]})
    }
    function dayClick2(e) {
        console.log(e);
        const startTime = new Date(e.start).toString().split(' ')
        const endTime = new Date(e.end).toString().split(' ')
        console.log(startTime[1]+"-"+startTime[2]+"-"+startTime[3])
        document.getElementById('Datetext').value=e.startStr.slice(0,10);
        document.getElementById('startTimeField').value=startTime[4]
        document.getElementById('endTimeField').value=endTime[4]
        console.log(startTime[4])
        console.log(endTime[4])
        this.setState({'selectedDate':e.startStr.slice(0,10),'endTime':endTime[4],'startTime':startTime[4]})
    }
    function handleChange(e){
        // setAccountState(e)        
        setStartTime1(e.target.value)
        // console.log(startTime1)
        let end = e.target.value.toString().split(':')
        let endtime = parseInt(end[0]) + 2
        // console.log(endtime.toString()+":"+end[1])
        setEndTime1(endtime.toString()+":"+end[1])
        let startTimeISO = selectedDate1+'T'+startTime1+":00"
        let endTimeISO = selectedDate1+'T'+endTime1+":00"
        setStartTimeStr(startTimeISO)
        setEndTimeStr(endTimeISO)
    }
    function handleDateChange(e){
        console.log('here')
        setSelectedDate1(e.target.value)
    }
    function handleClose(e) {
        if(e.target.value=="Save")
        {
            appointments.push({id: 1,
                                 Title:"Appointment" ,
                                 start:selectedDate1, 
                                 end: selectedDate1,
                                 startStr: startTimestr,
                                 endStr : endTimestr
                                })
            props.onSubmit(appointments)
        }
        setOpen(false);
    }
    function addCard(e){

        console.log(appointments)
        console.log(open);
        setOpen(true);
        console.log(open);
    }        // const [open, setOpen] = React.useState(false);
        return (
            <MuiThemeProvider theme={AppTheme}>
                <Card id="EditAvailability" style={styles.CalendarCard}>
                <div style={styles.leftcardControl}>
                <FormControl variant="outlined" style={styles.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Accounts</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        onChange={handleChange}
                        label="Accounts"
                    >
                        <MenuItem value={0}>
                        <em>All Accounts</em>
                        </MenuItem>
                        <MenuItem value={1}>Account 1</MenuItem>
                        <MenuItem value={2}>Account 2</MenuItem>
                        <MenuItem value={3}>Account 3</MenuItem>
                    </Select>
                    </FormControl>
                    <div style={styles.calendarStyle}>
                            <FullCalendar
                                eventTimeFormat={{ // like '14:30:00'
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                }}
                                events={appointments}
                                selectable={true}
                                selectMirror={true}
                                dayMaxEvents={true}
                                select={dayClick2}
                                navLinks={true}
                                headerToolbar={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                                }}
                                plugins={[
                                    dayGridPlugin,
                                    timeGridPlugin,
                                    listWeekPlugin,
                                    listMonthPlugin,
                                    
                                ]}/>
                    </div>
                </div>
                <div style={styles.overviewCalendar}>
                    <h2>Add availability</h2>
                    <FullCalendar
                                eventTimeFormat={{ // like '14:30:00'
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                }}
                                selectable={true}
                                selectMirror={true}
                                dayMaxEvents={true}
                                events={appointments}
                                select={dayClick}
                                fixedWeekCount={false}
                                navLinks={true}
                                headerToolbar={{
                                    left: '',
                                    center: '',
                                    right: 'listWeek,timeGridDay'
                                }}
                                plugins={[
                                    dayGridPlugin,
                                    timeGridPlugin,
                                    listWeekPlugin,
                                    listMonthPlugin,
                                    
                                ]}/>
                    <Button style={styles.addEventStyle} onClick={addCard}>+</Button>
                    <Dialog style={styles.dialogStyle} open={open}>
                        <DialogTitle style={{width:"400px"}}> Edit your Availability </DialogTitle>
                        <DialogContent>
                        
                        <div style={{display:'grid'}}>
                            <TextField
                            id="Datetext"
                            style={styles.datefield}
                            value={selectedDate1}
                            type="date" 
                            label="Selected Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                            }}
                            onChange={handleDateChange} />

                            <TextField
                                id="startTimeField"
                                style={styles.startfield}
                                type='time'
                                label='Start Time'
                                placeholder="Date"
                                value={startTime1}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                }}
                                onChange={handleChange}
                                />    
                                {/* <TextField
                                    id="time"
                                    label="Alarm clock"
                                    type="time"
                                    defaultValue="07:30"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                                /> */}
                            <TextField  
                                id="endTimeField"
                                style={styles.endfield}
                                type='time'
                                label='End Time'
                                value={endTime1}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    disabled:true

                                }}/>
                                <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel style={styles.selectStyle} id="demo-simple-select-outlined-label">Accounts</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                // value={age}
                                    onChange={handleChange}
                                    label="Accounts"
                                    defaultValue={1}
                                    
                                >
                                <MenuItem value={1}>Account 1</MenuItem>
                                <MenuItem value={2}>Account 2</MenuItem>
                                <MenuItem value={3}>Account 3</MenuItem>
                                </Select>
                                </FormControl>
                                <FormControl required component="fieldset" 
                                // className={classes.formControl}
                                >
        <FormLabel style={{margin:5}} component="legend">Select Location</FormLabel>
        <FormGroup style={{margin:5}}>
          <FormControlLabel
            control={<Checkbox checked={london} onChange={handleChange} name="london" />}
            label="London"
          />
          <FormControlLabel
            control={<Checkbox checked={belfast} onChange={handleChange} name="belfast" />}
            label="Belfast"
          />
          <FormControlLabel
            control={<Checkbox checked={ireland} onChange={handleChange} name="ireland" />}
            label="Ireland"
          />
        </FormGroup>
        <FormHelperText>Select Only 1</FormHelperText>
      </FormControl>
                                </div>
                            <div>
                            <Button style={styles.saveButton}
                            onClick={handleClose} value="Save">
                                Save
                            </Button>
                            <Button style={styles.saveButton}
                                onClick={handleClose} value="Close">
                                Close
                            </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                            
                </Card>
                </MuiThemeProvider>
        )
    }

const styles = {
    CalendarCard:{
        width:'100%'
    },
    selectStyle:{
        width:'100%'
    },
    leftcardControl:{
        width:'60%'
    },
    formControl: {
        margin: 5,
        marginTop:10,
        width: '100%',
      },
      selectEmpty: {
        marginTop: 2,
      },
    calendarStyle:{
        width:'100%',
        float:'left'
    },
    overviewCalendar:{
        width:'33%',
        float:'right',
        textAlign:'center',
        position:'relative'
    },
    saveButton:{
        padding:10,
        width:'100%',
        marginTop:20,
    },
    datefield:{
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        margin:5
    },
    startfield:{
        border: '1px solid transparant',
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        margin:5
    },
    endfield :{
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        margin:5
    },
    dialogStyle:{
        // width:'400px'
    },
    addEventStyle:{
        border:'1px solid black',
        fontSize:24,
        marginTop:10,
        width:'20%',
        float:'left'
    }
}
export default EditAvailabilityComponent
