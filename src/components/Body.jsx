import Welcome  from  './Welcome';
import Wrapper  from  './Wrapper';
import CompleteVacation  from  './CompleteVacation';
import styles from './Body.module.css';

function Body(){
    return (
        <main className={styles.body}>
            <Welcome />
            <Wrapper />
            <CompleteVacation />
        </main>
    );
}

export default Body;
