import VacationForm from "./components/VacationForm";
import VacationInfo from "./components/VacationInfo";
import ConfirmedVacation from "./components/ConfirmedVacation";
import CompletedVacation from "./components/CompletedVacation";

function App() {
   return (
        <div className="body">
    <section id="welcome">
      <h1>Bon Voyage!</h1>
      <div class="home-container">
        <div class="info">
          <h1>Vacation Schedule</h1>
        </div>
      </div>
    </section>

    <div id="wrapper">
      <VacationForm />
      <VacationInfo />
      <ConfirmedVacation />
    </div>
    <CompletedVacation />
  </div>
   );
}

export default App;
