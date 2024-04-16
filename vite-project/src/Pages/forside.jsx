import Greenhushwash from '../Components/greenhushwash'
import Landing from '../Components/landing'
import Lefttext from '../Components/lefttext'
import Righttext from '../Components/righttext'
import Textboks from '../Components/textboks'
import anmeldelsesbillede from '../assets/anmeldelse.svg'
import Foot from '../Components/foot'
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
    src="#"
    alt="fly og website after effects animation"></Lefttext>

    <Textboks overskrift="Internettet udleder også CO2"
    tekst="Lorem ipsum"></Textboks>

    <Righttext overskrift="Tyskland" 
    tekst="Lorem ipsum"
    src="#"
    alt="Tyskland after effekts animation"></Righttext>

    <Lefttext overskrift="Kina" 
    tekst="Lorem ipsum"
    src="#"
    alt="Kina after effekts animation"></Lefttext>

    <Righttext overskrift="Internettet" 
    tekst="Lorem ipsum"
    src="#"
    alt="Internet after effekts animation"></Righttext>

    <Greenhushwash></Greenhushwash>

    <h2 style={{textAlign:"center"}}>Anmeldelse</h2>

    <Lefttext tekst="lorem ipsum"
    src={anmeldelsesbillede}
    alt="anmeldelses billede af plante med cirkler"></Lefttext>


  <Foot></Foot>
    </>
    // alt html her (inden for forældre <>)
  )
}

export default Forside
