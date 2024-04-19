import Greenhushwash from '../Components/greenhushwash'
import Landing from '../Components/landing'
import Lefttext from '../Components/lefttext'
import Imgleft from '../Components/imgleft'
import Imgright from '../Components/imgright'
import Textboks from '../Components/textboks'
import anmeldelsesbillede from '../assets/anmeldelse.svg'
import Foot from '../Components/foot'
import Anmeldelse from "../Components/anmeldelse"

import tyskland from "../assets/tyskland.json"
import flyinternet from "../assets/flyinternet.json"
import internetpit from "../assets/internetpit.json"
import kina from "../assets/kina.json"

import textureImage from '../assets/firkanter.svg';

// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Forside() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    console.log("virker1");
    footer.scrollIntoView({ behavior: 'smooth' });
    console.log("virker");
  };

  // javascript her

  return (
    <>
      <Landing scrollToFooter={scrollToFooter}>
      </Landing>

      <Textboks overskrift="Hvad tilbyder vi?"
        tekst="Hos Plan.et tilbyder vi skræddersyede hjemmesideløsninger med fokus på bæredygtigt webdesign. Vores dedikerede team af webdesignere og udviklere stræber efter at skabe smukke og funktionelle hjemmesider, der overholder principperne om miljømæssig bæredygtighed."
        tekst2="Velkommen til Plan.et, hvor vi prioriterer både din online succes og vores planets fremtid.">

      </Textboks>

      <Lefttext overskrift="Bæredygtigt webdesign"
        tekst="Vidste du, at internettet producerer 1,7 milliarder ton CO2 årligt? "
        tekst2="Det svarer til lidt over 3% af verdens samlede CO2-udledning, hvilket gør vores online færden lige så belastende for klimaet som verdens samlede flytrafik."
        animationData={flyinternet}>

      </Lefttext>

      <Textboks overskrift="Internettet udleder også CO2"
        tekst="Selvom det måske ikke er åbenlyst, bidrager internettet også til CO2-udledningen. Hos vores webbureau er vi opmærksomme på denne påvirkning, og vi arbejder på at minimere vores digitale fodaftryk gennem bæredygtigt webdesign. Ved at vælge effektive designprincipper og miljøvenlige teknologier stræber vi efter at skabe hjemmesider, der ikke kun er funktionelle, men også skånsomme mod miljøet."></Textboks>
      <div style={{ backgroundImage: `url(${textureImage})` }}>

        <Imgleft overskrift="Tyskland"
          tekst="Tyskland udleder 2.17% af den globale udledning af CO2, og er derfor nummer seks på listen over de lande der udleder mest. "
          animationData={tyskland}
        ></Imgleft>

        <Imgright overskrift="Kina"
          tekst="Kina udleder 29.18% af den globale udledning af CO2 og ligger derfor nummer et på listen over de lande der udleder mest."
          animationData={kina}
        ></Imgright>

        <Imgleft overskrift="Internettet"
          tekst="Den mængde CO2 som internettet og it branchen udleder vil altså svare til 3.51% af den globale udledning af CO2. Det vil sige, at hvis internettet var et land, så ville det stjæle Tysklands position på 6. pladsen"
          animationData={internetpit}
        ></Imgleft>

        <Greenhushwash></Greenhushwash>
      </div>
      <Anmeldelse
        overskrift="Anmeldelser"
        tekst='"Plan.et leverede en fremragende service til min lille virksomhed med deres fokus på bæredygtigt webdesign. Resultatet var både smukt og funktionelt, og jeg satte pris på den positive miljøpåvirkning, vores nye hjemmeside havde. Jeg kan varmt anbefale Plan.et til andre små virksomheder, der ønsker at gøre en forskel online."'
        tekst2="- Kunde ejer, djaiosd"
        src={anmeldelsesbillede}
        alt="anmeldelses billede af plante med cirkler"></Anmeldelse>


      <Foot></Foot>
    </>
    // alt html her (inden for forældre <>)
  )
}

export default Forside
