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
    const [startHour, setStartHour] = useState(10)
    const [startMinute, setStartMinute] = useState(1)
    const [endHour, setEndhour] = useState(10)
    const [endMinute, setEndMinute] = useState(1)
    const [mainAccount, setMainAccount] = useState(1)

    const { london, setLondon } = useState(true)
    const { belfast, setBelfast } = useState(false);
    const { ireland, setIreland } = useState(false);
    const error = [london, belfast, ireland].filter((v) => v).length !== 1;
    const [buttonValue, setButtonValue] = useState('')

    const dayClick = e =>{
        
    }
    const handleChange = e => {
        
    }
    const handleDateChange = e =>{
        setSelectedDate1(e.target.value)
    }
    const handleClose = e => {
        if(e.target.value=="Save")
        {
            appointments.push({id: 1,
                                Title:"Appointment" ,
                                start:selectedDate1, 
                                end: selectedDate1,
                                startStr: startHour+':'+startMinute,
                                endStr : endHour+':'+endMinute
                                })
            props.onSubmit(appointments)
        }
        setOpen(false);
    }
    const addCard = e => {

        console.log(appointments)
        console.log(open);
        setOpen(true);
        console.log(open);
    }        // const [open, setOpen] = React.useState(false);
    const handleAccountChange = e => {
        if(e.target.value!=1){
            setButtonValue('ready');
        }
        else{
            setButtonValue('')
        }
    }
    const handleMainAccountChange = e =>{
        setMainAccount(e.target.value)  
    }
    const handleHourChange = e =>{
        setStartHour(e.target.value)
        setEndhour(e.target.value + 2)
    }
    const handleMinuteChange = e =>{
        console.log(e)
        setStartMinute(e.target.value)
        setEndMinute(e.target.value)
    }
        return (
            <MuiThemeProvider theme={AppTheme}>
                <Card id="EditAvailability" style={styles.CalendarCard}>
                <div style={styles.leftcardControl}>
                <FormControl variant="outlined" style={styles.formControlAccount}>
                    <InputLabel id="mainAccount">Accounts</InputLabel>
                    <Select
                        labelId="mainAccountLabel"
                        id="mainAccountId"
                        onChange={handleMainAccountChange}
                        label="Accounts"
                        value={mainAccount}
                    >
                        <MenuItem value={1}>
                        <em>All Accounts</em>
                        </MenuItem>
                        <MenuItem value={2}>Account 1</MenuItem>
                        <MenuItem value={3}>Account 2</MenuItem>
                        <MenuItem value={4}>Account 3</MenuItem>
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
                                selectMirror={true}
                                dayMaxEvents={true}
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
                        initialView='listWeek'
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: ''
                        }}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            listWeekPlugin,
                            listMonthPlugin,   
                        ]}
                    />
                    <FormControl variant="outlined" style={styles.formControlAccount}>
                        <InputLabel style={styles.selectStyle} id="demo-simple-select-outlined-label">Accounts</InputLabel>
                        <Select
                            labelId="selectAccount"
                            id="selectAccoutEdit"
                            onChange={handleAccountChange}
                            label="Accounts"
                            defaultValue={1}>
                        <MenuItem value={1}>All accounts</MenuItem>
                        <MenuItem value={2}>Account 1</MenuItem>
                        <MenuItem value={3}>Account 2</MenuItem>
                        <MenuItem value={4}>Account 3</MenuItem>
                        </Select>
                    </FormControl>
                    <Button style={styles.addEventStyle} onClick={addCard} disabled={!buttonValue}>+</Button>
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

                            <Typography style={{margin:5}}>Select Start Time</Typography>
                            <div style={{display:'flex',margin:5,width:'100%'}}>
                            <FormControl variant="outlined" style={{marginRight:20}}>
                                <InputLabel style={styles.selectHourStyle}>Hour</InputLabel>
                                <Select
                                    labelId="selectHour"
                                    id="selectHour"
                                    onChange={handleHourChange}
                                    label="Hour"
                                    value={startHour}
                                    >
                                <MenuItem value={1}>00</MenuItem>
                                <MenuItem value={2}>01</MenuItem>
                                <MenuItem value={3}>02</MenuItem>
                                <MenuItem value={4}>03</MenuItem>
                                <MenuItem value={5}>04</MenuItem>
                                <MenuItem value={6}>05</MenuItem>
                                <MenuItem value={7}>06</MenuItem>
                                <MenuItem value={8}>07</MenuItem>
                                <MenuItem value={9}>08</MenuItem>
                                <MenuItem value={10}>09</MenuItem>
                                <MenuItem value={11}>10</MenuItem>
                                <MenuItem value={12}>11</MenuItem>
                                <MenuItem value={13}>12</MenuItem>
                                <MenuItem value={14}>13</MenuItem>
                                <MenuItem value={15}>14</MenuItem>
                                <MenuItem value={16}>15</MenuItem>
                                <MenuItem value={17}>16</MenuItem>
                                <MenuItem value={18}>17</MenuItem>
                                <MenuItem value={19}>18</MenuItem>
                                <MenuItem value={20}>19</MenuItem>
                                <MenuItem value={21}>20</MenuItem>
                                <MenuItem value={22}>21</MenuItem>
                                <MenuItem value={23}>22</MenuItem>
                                <MenuItem value={24}>23</MenuItem>
                                </Select>
                                </FormControl>
                                <FormControl variant="outlined" style={{}}>
                                <InputLabel style={styles.selectMinuteStyle}>Minute</InputLabel>
                                <Select
                                    labelId="selectMinute"
                                    id="selectMinute"
                                    onChange={handleMinuteChange}
                                    label="Minutes"
                                    value={startMinute}>
                                <MenuItem value={1}>00</MenuItem>
                                <MenuItem value={2}>15</MenuItem>
                                <MenuItem value={3}>30</MenuItem>
                                <MenuItem value={4}>45</MenuItem>
                                </Select>
                                </FormControl>
                            </div>
                            <Typography style={{margin:5,opacity:'0.5'}}>Select End Time</Typography>
                            <div style={{display:'flex',margin:5,width:'100%'}}>
                            <FormControl variant="outlined" style={{marginRight:20}}>
                                <InputLabel style={styles.selectHourStyle}>Hour</InputLabel>
                                <Select
                                    labelId="selectEndHour"
                                    id="selectEndHour"
                                    label="Hour"
                                    value={endHour}
                                    disabled>
                                <MenuItem value={1}>00</MenuItem>
                                <MenuItem value={2}>01</MenuItem>
                                <MenuItem value={3}>02</MenuItem>
                                <MenuItem value={4}>03</MenuItem>
                                <MenuItem value={5}>04</MenuItem>
                                <MenuItem value={6}>05</MenuItem>
                                <MenuItem value={7}>06</MenuItem>
                                <MenuItem value={8}>07</MenuItem>
                                <MenuItem value={9}>08</MenuItem>
                                <MenuItem value={10}>09</MenuItem>
                                <MenuItem value={11}>10</MenuItem>
                                <MenuItem value={12}>11</MenuItem>
                                <MenuItem value={13}>12</MenuItem>
                                <MenuItem value={14}>13</MenuItem>
                                <MenuItem value={15}>14</MenuItem>
                                <MenuItem value={16}>15</MenuItem>
                                <MenuItem value={17}>16</MenuItem>
                                <MenuItem value={18}>17</MenuItem>
                                <MenuItem value={19}>18</MenuItem>
                                <MenuItem value={20}>19</MenuItem>
                                <MenuItem value={21}>20</MenuItem>
                                <MenuItem value={22}>21</MenuItem>
                                <MenuItem value={23}>22</MenuItem>
                                <MenuItem value={24}>23</MenuItem>
                                </Select>
                                </FormControl>
                                <FormControl variant="outlined" style={{}}>
                                <InputLabel style={styles.selectMinuteStyle}>Minute</InputLabel>
                                <Select
                                    labelId="selectEndMinute"
                                    id="selectEndMinute"
                                    label="Minute"
                                    value={endMinute}
                                    disabled>
                                <MenuItem value={1}>00</MenuItem>
                                <MenuItem value={2}>15</MenuItem>
                                <MenuItem value={3}>30</MenuItem>
                                <MenuItem value={4}>45</MenuItem>
                                </Select>
                                </FormControl>
                                </div>
                            
                            <FormControl required component="fieldset" >
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
    formControlAccount: {
        margin: 5,
        marginTop:10,
        width: '70%',
        float:'left'
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
        paddingRight:20,
        position:'relative'
    },
    selectHourStyle:{
        width:150,
        marginRight:30
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
        margin:5,
        marginTop:10
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
