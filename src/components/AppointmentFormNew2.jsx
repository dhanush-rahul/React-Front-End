import React, {useState} from 'react'
// import {makeStyles} from '@material-ui/core/styles';
import Calendar from 'react-calendar'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {TextField, Button, Card, CardActions, CardHeader, CardContent,Collapse, Typography, Divider, FormControl, FormControlLabel, FormGroup, FormLabel,IconButton, List, Switch, Tab, Tabs} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import 'react-calendar/dist/Calendar.css';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//     },
//     heading: {
//       fontSize: theme.typography.pxToRem(15),
//       fontWeight: theme.typography.fontWeightRegular,
//     },
//   }));

const AppointmentFormNew2 = props =>{
    // const classes = useStyles();
    const [formatvalue, setFormatvalue] = useState('');
    const [location, setLocation] = useState('');
    const [postcode, setPostcode] = useState('');
    const [showPostcode, setShowpostcode] = useState(false)
    const [showFaceToFace, setShowfacetoface] = useState(false)
    const [showremote, setShowremote] = useState(false)
    const [enteredAllDetails, setEnteredAllDetails] = useState(false)
    const [notEnteredDetails, setNotEnteredDetails] = useState(true)

    const handleChange = (e) =>{
        setFormatvalue(e.target.value)
        if(e.target.value=="face-to-face")
            {
                setShowfacetoface(true)
                setShowremote(false)
            }
        else if(e.target.value=="remote")
            {
                setShowremote(true)
                setShowfacetoface(false)
            }
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
        if(e.target.value=="Other")
            setShowpostcode(true)
        else
            setShowpostcode(false)
        console.log(location)
    }
    const handlePostCode = (e) =>{
        setPostcode(e.target.value)
    }
    const handleCheck = (e) =>{

    }
    const handleOther = (e) =>{
        if(!showPostcode)
            setShowpostcode(true)
    }
    const handleDateCheck = (e) =>{
        setEnteredAllDetails(true)
        setNotEnteredDetails(false)
    }
    return(
        <div>
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant='h5'>Assessment Format</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <FormControl style={{ width:'50%',textAlign:'end'}} component="fieldset">
                <RadioGroup aria-label="type" name="assessmentType" value={formatvalue} onChange={handleChange}>
                    <FormControlLabel value="face-to-face" control={<Radio />} label="Face-to-Face" />
                    <FormControlLabel value="remote" control={<Radio />} label="Remote" />
                </RadioGroup>
            </FormControl>
            </AccordionDetails>
            </Accordion>


            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant='h5'>Assessment Location</Typography>
            </AccordionSummary>
            {showFaceToFace && <AccordionDetails style={{display:'grid'}}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="loc" name="location" value={location} onChange={handleLocation}>
                    <FormControlLabel  value="home-location" control={<Radio />} label="Home Location" />
                    <FormControlLabel  value="term-location" control={<Radio />} label="Term Location" />
                    <div style={{}}>
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    {showPostcode && <div style={{display:'flex'}}><Typography style={{margin:15, marginLeft:0}}>Enter postcode</Typography><input style={{fontSize:16,padding:10}} placeholder="Enter Postcode"></input><Button 
                     style={{width:'10%', margin:5,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}}
                     onClick={handleCheck}
                     >Check</Button></div>}
                    </div>
                </RadioGroup>
            </FormControl>
            
            </AccordionDetails>}
            {showremote && <AccordionDetails style={{display:'grid'}} >
                <FormControl component="fieldset">
                            <RadioGroup aria-label="rem" name="remoteLocation" value={location} onChange={handleLocation}>
                                <FormControlLabel  value="phone" control={<Radio />} label="Phone" />
                                <FormControlLabel  value="video" control={<Radio />} label="Video" />
                            </RadioGroup>
                        </FormControl>
                        <Button style={{width:'10%', marginTop:15,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} onClick={handleCheck}>Check</Button>
                </AccordionDetails>}
            </Accordion>

            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant='h5'>Assessment Date</Typography>
                </AccordionSummary>
                <AccordionDetails style={{width:'26%',marginRight:'auto',marginLeft:'auto',textAlign:'center'}}>
                    <Calendar></Calendar>
                    <Button style={{ marginTop:15,padding:10,background:'#0022a5',color:'#FFF',boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'}} onClick={handleDateCheck}>Search</Button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant='h5'>Assessment Timing</Typography>
                </AccordionSummary>
                {enteredAllDetails && <AccordionDetails >
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
                </AccordionDetails>}
                {notEnteredDetails && <AccordionDetails>
                        <Typography>Please enter all details</Typography>
                    </AccordionDetails>}
            </Accordion>
        </div>
    )
}

export default AppointmentFormNew2