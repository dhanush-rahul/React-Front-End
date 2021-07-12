import React, { useState, Component } from 'react'
import AppointmentFormNew from '../components/AppointmentFormNew'

export default function BookYourAppointment(props){

    const [dateofappointment, setDateofappointment] = useState('');
    const [location, setLocation] = useState('')
    const [assessorSelected, setAssessorSelected] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [appointment, setAppointment] = useState([])
        function handleSubmit(e){
            
        }
        return (
            <AppointmentFormNew
            appointment={appointment}
            onSubmit={handleSubmit}/>
        )
        
}


