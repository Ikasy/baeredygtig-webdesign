import pcbillede from "../assets/baerbar.webp";
import textureImage from '../assets/texturefour.svg';

// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Landing() {
// javascript her

  return (
<section>
    <div className="landingboks">
        <h1>Få en ny <br/> <span>optimeret</span> <br/> hjemmeside</h1>
        <div style={{backgroundImage: `linear-gradient(to right, rgba(74, 49, 18, 1), rgba(74, 49, 18, 0)), url(${textureImage})`}}>
        <img src={pcbillede}alt="landing billede med pc"/>
        </div>
    </div>

    <div className="bookmoedeboks">
        <p>Få en gratis <br/> samtale <br/></p>
        <button>Book møde</button>
        
</div>
<div className="outline"></div>

</section>
    // alt html her (inden for forældre <>)
  )
}

export default Landing