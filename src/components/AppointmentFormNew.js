import React, {useState} from 'react'
import {TextField, Button, Card, CardActions, CardHeader, CardContent,Collapse, Typography, Divider, FormControl, FormControlLabel, FormGroup, FormLabel,IconButton, List, Switch, Tab, Tabs} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentFormNew = props => {
    const [value, setValue] = React.useState('face-to-face');
    const [postcode, setPostcode] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [showFace, setShowface] = useState(true)
    const [showRemote, setShowRemote] = useState(false)
    const [showPostcode, setShowPostcode] = useState(false)
    const [enteredAllDetails, setEnteredalldetails] = useState(false)
    const [notenteredDetails, setNotenteredDetails] = useState(true)
    const handlePostCode = (e) =>{
        setPostcode(e.target.value)
        console.log(e.target.value)
    }
    const handleLocation = (e) =>{
        setLocation(e.target.value)
        if(e.target.value=="Other")
            setShowPostcode(true)
        else
            setShowPostcode(false)
    }
    const handleCheck = (e) =>{
    }
    const handleChange = (event) => {
      setValue(event.target.value);
      if(event.target.value=='face-to-face'){
        setShowface(true)
        setShowRemote(false)
      }
      else if(event.target.value=='remote'){
        setShowface(false)
        setShowRemote(true)
      }
    };
    const handleDateChange =(e) =>{
        setDate(e.target.value)
    }
    function handleRadio(input){

    }
    const handleDateCheck =e =>{
        setEnteredalldetails(true)
    }
    return(
        <div>
            <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" style={{padding:15}}>Book Your Appointment Now</Typography>
                    <hr/>
                    <div>
                        <Typography variant="h5" style={{margin:15}}>Assessment Format</Typography>
                    <FormControl style={{ width:'50%', margin:15,marginTop:0}} component="fieldset">
                         
                        <RadioGroup aria-label="type" name="assessmentType" value={value} onChange={handleChange}>
                            <FormControlLabel value="face-to-face" control={<Radio />} label="Face To Face" />
                            <FormControlLabel value="remote" control={<Radio />} label="Remote" />
                            
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <hr/>
                    <div>
                    <Typography style={{margin:15}} variant='h5'>Assessment Location</Typography>
                    {showFace && <div style={{margin:15,display:'grid'}}>
                    
                    <FormControl component="fieldset">
                         
                         <RadioGroup aria-label="loc" name="location" value={location} onChange={handleLocation}>
                            <FormControlLabel  value="home-location" control={<Radio />} label="Home Location" />
                            <FormControlLabel  value="term-location" control={<Radio />} label="Term Location" />
                            <div style={{}}>
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                {showPostcode && <div style={{display:'flex'}}><Typography style={{margin:15,marginLeft:0}}>Enter postcode</Typography><input style={{fontSize:16,padding:10}} placeholder="Enter Postcode"></input><Button 
                      style={{width:'10%', margin:5,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}}
                     onClick={handleCheck}
                     >Check</Button></div>}
                            </div>
                         </RadioGroup>
                     </FormControl>
                     
                    </div>}
                     
                    {showRemote && <div style={{display:'grid',margin:15}}>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="rem" name="remoteLocation" value={location} onChange={handleLocation}>
                                <FormControlLabel  value="phone" control={<Radio />} label="Phone" />
                                <FormControlLabel  value="video" control={<Radio />} label="Video" />
                            </RadioGroup>
                        </FormControl>
                        {/* <Button 
                        style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}}
                        onClick={handleCheck}>Check</Button> */}
                    </div>}
                    </div>
                    <hr/>
                    <div style={{textAlign:'center'}}>
                        <Typography variant="h5" style={{padding:15, textAlign:'initial'}}> Assessment Date</Typography>
                        <div style={{marginLeft:'auto',marginRight:'auto',width:'350px'}}>
                        <Calendar></Calendar>
                        </div>
                        <Button style={{padding:10, marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} onClick={handleDateCheck}>Search</Button>
                    </div>
                    <hr/>
                    {enteredAllDetails && <div>
                        <Typography variant='h5'  style={{margin:15}}>Assessment Timing</Typography>
                    <div style={{maxHeight:"400px",overflow:'auto',width:'30%',marginLeft:'auto',marginRight:'auto'}}>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    <Card style={{margin:5}} variant="outlined"> 
                        <CardContent> 
                            <Typography>Date :</Typography>
                            <Typography>Time :</Typography>
                            <Typography>Format :</Typography>
                        </CardContent>
                        <CardActions style={{marginLeft:'auto',marginRight:'auto',width:'20%'}}>
                            <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} size="small">Select</Button>
                        </CardActions>
                    </Card>
                    </div>
                </div>}

                    


                </CardContent>
            </Card>
            </div>
        </div>
    )
}

const styles = {
    assessmentType:{
        float:'right',
        display:'flex'  
    },
    available:{
        display:'inline-grid',
        padding:15,
        height:250,
        width:250,
        overflow:'auto',

    },
    datefield:{
        float:'right'
    }
}
export default AppointmentFormNew