import Lottie from "lottie-react"

function Lefttext(props) {
    // javascript her
    const { animationData } = props;

      return (
        <section className="lefttekst">
    
          <div className="storboks">
              <h2>{props.overskrift}</h2>
              <p>{props.tekst}</p>
              <p>{props.tekst2}</p>
          </div>     
          <div className="lilleboks">
            <Lottie className="lottie" animationData={animationData} />
            <img className="billede" src={props.src} alt={props.src}></img>
          </div>
        </section>
    
        // alt html her (inden for forældre <>)
      )
    }
    
    export default Lefttext
    