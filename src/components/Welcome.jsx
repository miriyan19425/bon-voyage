import styles from './Welcome.module.css';

function Welcome(){
    return (
        <section id="welcome">
            <h1>Bon Voyage!</h1>
            <div class={styles.homeContainer}>
                <div class={styles.info}>
                    <h1>Vacation Schedule</h1>
                </div>
            </div>
        </section>
    );
}

export default Welcome;
