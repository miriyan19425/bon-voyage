import styles from './ScheduleVacations.module.css';
import {useState} from 'react';

function ScheduleVacation(){
    const [firstName, setFirstName] = useState('');
    return (
      <section id="schedule-vacation">
        <div class={styles.wrapper}>
          <h1>Vacation Schedule</h1>

          <div class={styles.containerText}>
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

export default ScheduleVacation;
