import {useState} from 'react';

function VacationForm({prepareVacation}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if (!firstName || !lastName || !from || !to) return;

        const data = {firstName, lastName, from, to};

        prepareVacation(data);
        setFirstName("");
        setLastName("");
        setFrom("");
        setTo("");
    }
    
    return (
        <section id="schedule-vacation">
            <div class="wrapper">
                <h1>Vacation Schedule</h1>
                <div class="container-text">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="first-name">First name:</label>
                        <input type="text" id="first-name" />

                        <label htmlFor="last-name">Last name:</label>
                        <input type="text" id="last-name" />

                        <label htmlFor="from-date">From Date:</label>
                        <input type="date" id="from-date" />

                        <label htmlFor="to-date">To Date:</label>
                        <input type="date" id="to-date" />

                        <button id="next-btn">Next</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default VacationForm;
