import styles from './ConfirmVacations.module.css';

function ConfirmVacations(){
    return (
        <section id="confirm-vacations">
        <div class="confirm-container">
          <div class={styles.wrapper}>
            <h1>Confirm Vacation</h1>
            <ul class="confirm-list"></ul>
          </div>
        </div>
      </section>
    );
}

export default ConfirmVacations;
