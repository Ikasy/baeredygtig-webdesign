// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Anmeldelse(props) {
    // javascript her
    
      return (
        <section className="lefttekst">
    
        <div className="storboks">
            <h2>{props.overskrift}</h2>
            <p style={{fontStyle:"italic"}}>{props.tekst}</p>
            <p style={{textAlign:"right", fontStyle:"italic", color:"#de922f" }}>{props.tekst2}</p>

        </div>     
        <div className="lilleboks">
            <img className="anmeldelsesbillede" src={props.src} alt={props.alt}/>
            </div>
        </section>
    
        // alt html her (inden for forældre <>)
      )
    }
    
    export default Anmeldelse