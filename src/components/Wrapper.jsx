import ScheduleVacation from './ScheduleVacation';
import ConfirmVacations from './ConfirmVacations';
import InfoVacations from './InfoVacations';

function Wrapper(){
    return (
        <div id="wrapper">
            <ScheduleVacation />
            <ConfirmVacations />
            <InfoVacations />
        </div>
    );
}

export default Wrapper;
