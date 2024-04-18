import Firesektioner from "../Components/firesektioner"
import Righttext from "../Components/righttext"
import Lefttext from "../Components/lefttext"
import Foot from "../Components/foot"
import mission from "../assets/mission.svg"
import teleskop from "../assets/teleskop.svg"
import globe from "../assets/globe.svg"
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Omosside() {


  return (
    <>
      <Firesektioner></Firesektioner>
      
      <h2 className="vaerdi">Vores værdier</h2> 
      
      <Righttext 
        overskrift="Mission"
        tekst="Vores mission er at oplyse og opbygge en fælles forståelse for vigtigheden af en fremtidig bæredygtig kurs. Dette vil opnås ved at fremhæve de fordele, der følger med forskellige bæredygtige tiltag ud over deres direkte bæredygtige virkninger. "
        src={mission}
        alt=""
        > </Righttext> 
        
      <Lefttext 
        overskrift="Vision"
        tekst="Vores vision er at lave performance optimeret websites med æstetiske og brugervenlige aspekter, med fokus på at overholde principperne for bæredygtigt webdesign.
        Vi ved, at internettet er en stor synder i forhold til CO2-udledningog det er Plan.ets vision at udbrede viden herom, så man sammen kan passe bedre på planeten."
        src={teleskop}
        alt=""
        ></Lefttext> 
      
      <Righttext 
        overskrift="Formål" 
        tekst="Vi tror på at udvikle innovative løsninger, der ikke blot imødekommer nutidens behov, men også tager hensyn til fremtidige generationers miljømæssige og sociale krav. Ved konstant at stræbe efter ansvarlig webdesign forsøger Plan.et at forbedre produkter og tjenester med fokus på at minimere miljøpåvirkning og maksimere en mere positive indvirkning på samfundet."
        src={globe}
        alt=""
        ></Righttext>
      
      
      <Foot></Foot>
    </>
    
  )
}

export default Omosside
