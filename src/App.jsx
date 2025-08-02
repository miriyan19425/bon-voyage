import VacationForm from "./components/VacationForm";

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
            <section id="info-vacations">
               <div class="vacations-info-container">
                  <div class="wrapper">
                     <h1>Vacation info</h1>
                     <ul class="info-list"></ul>
                  </div>
               </div>
            </section>
            <section id="confirm-vacations">
               <div class="confirm-container">
                  <div class="wrapper">
                     <h1>Confirm Vacation</h1>
                     <ul class="confirm-list"></ul>
                  </div>
               </div>
            </section>
         </div>
         <section id="complete-vacation">
      <div>
        <a id="ok">
          <h1 id="status"></h1>
        </a>
      </div>
    </section>

    <script src="app.js"></script>
  </div>
   );
}

export default App;
