// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Righttext(props) {
    // javascript her
    
      return (
        <section className="righttekst">
          <div className="lilleboks">
        <iframe className="" src={props.src}></iframe>
            </div>

          <div className="storboks">
            <h2>{props.overskrift}</h2>
            <p>{props.tekst}</p>
            <p>{props.tekst2}</p>
            

          </div>
        </section>
    
        // alt html her (inden for forældre <>)
      )
    }
    
    export default Righttext
    