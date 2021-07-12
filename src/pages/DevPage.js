import React, { Component } from 'react'
import AppointmentFormdemo from '../components/AppointmentFormdemo'
import AppointmentFormNew2 from '../components/AppointmentFormNew2'

export class DevPage extends Component {
    state={
        dateofappointment: '',
        residence:'',
        accessorSelected: '',
        startTime: '',
        endTime:''
    }
    render() {
        // console.log(this.state)
        if(this.state.dateofappointment!=""){
            return(
                <div style={{textAlign:"center"}}>
                    <h1> Appointment Confirmed </h1>
                    <p> Date Of Appointment : {this.state.dateofappointment}</p>
                    <p> Residence : {this.state.residence}</p>
                    <p> Accessor Selected : {this.state.accessorSelected}</p>
                    <p> Time : {this.state.startTime} to {this.state.endTime}</p>
                </div>
            )
        }
        return (
            
            // <AppointmentFormdemo onSubmit={(value)=>{
            //     console.log(value)
            //     if(value.endTime!=""){
            //         this.setState(value)
            //     }
            // }}/>
            <AppointmentFormNew2/>
        )
    }
}

export default DevPage
