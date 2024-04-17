import Lottie from "lottie-react"
import tyskland from "../assets/Tysklandpiesvg.json"
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Lefttext(props) {
    // javascript her
    
      return (
        <section className="lefttekst">
    
        <div className="storboks">
            <h2>{props.overskrift}</h2>
            <p>{props.tekst}</p>
            <p>{props.tekst2}</p>

        </div>     
        <div className="lilleboks">
        <Lottie className="" animationData={tyskland}></Lottie> 
            </div>
        </section>
    
        // alt html her (inden for forældre <>)
      )
    }
    
    export default Lefttext
    