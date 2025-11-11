import {useState} from 'react';

import VacationForm from "./components/VacationForm";
import VacationInfo from "./components/VacationInfo";
import ConfirmedVacation from "./components/ConfirmedVacation";
import CompletedVacation from "./components/CompletedVacation";

function App() {
   const [vacationData, setVacationData] = useState( {firstName: '', lastName: '', from: '', to: ''} );

   function getVacationData(d) { setVacationData(d); }

   function getDataToEdit(){}
   
   return (
      <div className="body">
         <section id="welcome">
            <h1>Bon Voyage!</h1>
            <div class="home-container">
               <div class="info"><h1>Vacation Schedule</h1></div>
            </div>
         </section>
         <div id="wrapper">
            <VacationForm prepareVacation={getVacationData} vacationEdit={getDataToEdit}/>
            <VacationInfo vacationInput={vacationData}/>
            <ConfirmedVacation />
         </div>
         <CompletedVacation />
      </div>
   );
}

export default App;
