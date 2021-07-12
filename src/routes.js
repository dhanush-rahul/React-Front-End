import React from 'react';
import { Switch, Route, Router }    from 'react-router-dom';
import EditAvailability             from './pages/EditAvailability';
import Homepage                     from './pages/Homepage';
import BookYourAppointment          from './pages/BookYourAppointment';
import AppointmentConfirmation      from './pages/AppointmentConfirmation';
import DevPage from './pages/DevPage';
const Routes = ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Homepage} />

                <Route exact path='/bookyourappointment' component={BookYourAppointment} />
                <Route exact path='/editavailability' component={EditAvailability} />
                <Route exact path='/confirmAppointment' component={AppointmentConfirmation } />
                <Route exact path='/devpage' component={DevPage}/>
            </Switch>
        </Router>
    )
};

export default Routes;