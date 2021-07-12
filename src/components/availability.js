import React, {Component} from 'react';
import {TextField, Button, Card, CardActions, CardHeader, CardContent,Collapse, Typography, Divider, FormControl, FormControlLabel, FormGroup, FormLabel,IconButton, List, Switch, Tab, Tabs} from '@material-ui/core';

export class Availability extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <div style={styles.overviewCalendar}>
            <TextField
            id="Datetext"
            style={styles.datefield}
            type="date" 
            label="Selected Date"
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{
              }} />
        <TextField
            id="startTimeField"
            style={styles.startfield}
            type='time'
            label='Start Time'
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{
              }} />    
        <TextField 
            id="endTimeField"
            style={styles.endfield}
            type='time'
            label='End Time'
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{
              }}/>
        <Button style={styles.saveButton}
            onClick={(event) => this.props.onSubmit(this.state)}>
            Save
        </Button>
        </div>
        
        )
    }
}
const styles= {
    datefield:{

    },
    startfield:{

    },
    endfield:{

    },
    saveButton:{
        
    }
}
