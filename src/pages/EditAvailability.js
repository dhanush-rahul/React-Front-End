import React, { useState , Component} from 'react'
import EditAvailabilityComponent from '../components/EditAvailabilityComponent'
import EditComplete from '../components/EditComplete'

export default function EditAvailability(props) {

               
        const [selectedDate, setSelectedDate] = useState('');
        const [startTime, setStartTime] = useState(new Date());
        const [endTime, setEndTime] = useState(new Date());
        const [account, setAccount] = useState('');
        const [appointments, setAppointments] = useState([])
        
        // console.log(this.state);
        // if(this.state.selectedDate!=""){
        //     alert('Availability Edited. Date:'+ this.state.selectedDate+' Start Time:'+ this.state.startTime+'  End Time : '+this.state.endTime)
        // }
        function handleSubmit(e){
            setAppointments(appointments)
            console.log(appointments)
        }
        return(
            <EditAvailabilityComponent 
            appointments={appointments} 
            onSubmit={handleSubmit}/>
        )
    
    
}

