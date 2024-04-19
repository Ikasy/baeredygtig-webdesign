import Lottie from "lottie-react"

// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Righttext(props) {
    // javascript her
    const { animationData } = props;

      return (
        <section className="righttekst">
          <div className="lilleboks">
            <Lottie animationData={animationData} />
            <img className="billede" src={props.src} alt={props.src}></img>
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
    