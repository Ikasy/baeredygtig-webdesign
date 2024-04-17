import Greenhushwash from '../Components/greenhushwash'
import Landing from '../Components/landing'
import Lefttext from '../Components/lefttext'
import Righttext from '../Components/righttext'
import Textboks from '../Components/textboks'
import anmeldelsesbillede from '../assets/anmeldelse.svg'
import Foot from '../Components/foot'
import Anmeldelse from "../Components/anmeldelse"


// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Forside() {

    



// javascript her

  return (
    <>
    <Landing>
    </Landing>

    
    <Textboks overskrift="Hvad tilbyder vi?" 
    tekst="Hos Plan.et tilbyder vi skræddersyede hjemmesideløsninger med fokus på bæredygtigt webdesign. Vores dedikerede team af webdesignere og udviklere stræber efter at skabe smukke og funktionelle hjemmesider, der overholder principperne om miljømæssig bæredygtighed." 
    tekst2="Velkommen til Plan.et, hvor vi prioriterer både din online succes og vores planets fremtid.">

    </Textboks>

    <Lefttext overskrift="Bæredygtigt webdesign" 
    tekst="Vidste du, at internettet producerer 1,7 milliarder ton CO2 årligt? " 
    tekst2="Det svarer til lidt over 3% af verdens samlede CO2-udledning, hvilket gør vores online færden lige så belastende for klimaet som verdens samlede flytrafik." 
    src="https://lottie.host/embed/7a5eeec5-3bb2-4a2f-a080-bde787d919a7/ZSXHbQEvh7.json"
    alt="fly og website after effects animation"></Lefttext>

    <Textboks overskrift="Internettet udleder også CO2"
    tekst="Lorem ipsum"></Textboks>

    <Righttext overskrift="Tyskland" 
    tekst="Lorem ipsum"
    src="https://lottie.host/embed/ad5f7ff8-ff33-444d-839b-f556ab8ea0b2/yYQiVGCdXd.json"
    alt="Tyskland after effekts animation"></Righttext>

    <Lefttext overskrift="Kina" 
    tekst="Lorem ipsum"
    src="https://lottie.host/embed/acc2eaef-8fa0-4912-9840-19e2ae8b63ba/Cpv1F3Ng8X.json"
    alt="Kina after effekts animation"></Lefttext>

    <Righttext overskrift="Internettet" 
    tekst="Lorem ipsum"
    src="https://lottie.host/embed/c0b4512d-ce58-4854-bd57-a4f7b3e66ed0/8I4uLHn3FF.json"
    alt="Internet after effekts animation"></Righttext>

    <Greenhushwash></Greenhushwash>

    <h2 style={{textAlign:"center"}}>Anmeldelse</h2>

    <Anmeldelse tekst="lorem ipsum"
    src={anmeldelsesbillede}
    alt="anmeldelses billede af plante med cirkler"></Anmeldelse>


  <Foot></Foot>
    </>
    // alt html her (inden for forældre <>)
  )
}

export default Forside
