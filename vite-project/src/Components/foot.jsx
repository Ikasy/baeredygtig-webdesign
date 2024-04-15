// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Foot() {
    // javascript her
    
      return (
        <footer>      
        
            <div>  
            <div className="kontakt"> 
                <h3>Er du interesseret i at høre mere?</h3>
                <a href="tel: +45 12345678">+45 12345678 <img src="#" alt="telefon ikon" /></a> 
                <a href="mailto: Kontakt@Plan.et.dk">Kontakt@Plan.et.dk <img src="#" alt="mail ikon" /></a>
                <p>Planetvej 1, Earth 0000</p>
            </div>
            <div className="formular">
            <form>
                <input 
                    type="text"
                    name="navn"
                    placeholder="Dit Navn"
                    required
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Din Email"
                    required
                />
                <input 
                    type="number"
                    name="mobilnummer"
                    placeholder="Dit Mobilnummer"
                    required
                />
                <input 
                    type="date"
                    name="Dato"
                    placeholder="dato for møde"
                    required
                />
                <input 
                    type="time"
                    name="Tidspunkt"
                    placeholder="tidspunkt for møde"
                    required
                />
                <textarea id="meetinginfo"
                    type="text"
                    name="indhold"
                    placeholder="Hvad skal mødet handle om?"
                    required
                />
                <button type="submit">Book møde</button>
            </form>
            </div>
            </div>
        </footer>



        // alt html her (inden for forældre <>)
      )
    }
    
    export default Foot
    