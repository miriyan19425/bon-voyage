function VacationInfo({vacationInput}){
  return (
    <section id="info-vacations">
      <div className="vacations-info-container">
        <div className="wrapper">
          <h1>Vacation info</h1>
          {
            (  
              vacationInput.firstName === ''  
                    
            ) ||
            <ul className="info-list">
              <li className="vacation-content">
                <article>
                   
                </article>
                <button className="edit-btn">Edit</button>
                <button className="continue-btn">Continue</button>  
              </li>
            </ul>
          }
        </div>
      </div>
    </section>
  );
}

export default VacationInfo;
