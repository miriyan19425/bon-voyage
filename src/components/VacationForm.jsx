import {useState} from 'react';

function VacationForm({prepareVacation}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    
    return (
        <section id="schedule-vacation">
            <div class="wrapper">
                <h1>Vacation Schedule</h1>
                <div class="container-text">
                    <form action="">
                        <label for="first-name">First name:</label>
                        <input type="text" id="first-name" name="first-name" />

                        <label for="last-name">Last name:</label>
                        <input type="text" id="last-name" name="last-name" />

                        <label for="from-date">From Date:</label>
                        <input type="date" id="from-date" name="from-date" />

                        <label for="to-date">To Date:</label>
                        <input type="date" id="to-date" name="to-date" />

                        <button id="next-btn" type="submit">Next</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default VacationForm;
