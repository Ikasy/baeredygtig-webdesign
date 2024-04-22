import Firesektioner from "../Components/firesektioner"
import Righttext from "../Components/righttext"
import Lefttext from "../Components/lefttext"
import Foot from "../Components/foot"
import mission from "../assets/mission.svg"
import teleskop from "../assets/teleskop.svg"
import globe from "../assets/globe.svg"
import { useEffect } from "react"
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Omosside() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 

  return (
    <>
      <h2  className="vaerdi">Vores værdier</h2> 
      <div id="omos">
      <Righttext 
        overskrift="Mission"
        tekst="Vores mission er at oplyse og opbygge en fælles forståelse for vigtigheden af en fremtidig bæredygtig kurs. Dette vil opnås ved at fremhæve de fordele, der følger med forskellige bæredygtige tiltag ud over deres direkte bæredygtige virkninger. "
        src={mission}
        alt="Ikon af mission"
        > </Righttext> 
        
      <Lefttext 
        overskrift="Vision"
        tekst="Vores vision er at lave performance optimeret websites med æstetiske og brugervenlige aspekter, med fokus på at overholde principperne for bæredygtigt webdesign.
        Vi ved, at internettet er en stor synder i forhold til CO2-udledningog det er Plan.ets vision at udbrede viden herom, så man sammen kan passe bedre på planeten."
        src={teleskop}
        alt="Ikon af teleskop"
        ></Lefttext> 
      
      <Righttext 
        overskrift="Formål" 
        tekst="Vi tror på at udvikle innovative løsninger, der ikke blot imødekommer nutidens behov, men også tager hensyn til fremtidige generationers miljømæssige og sociale krav. Ved konstant at stræbe efter ansvarlig webdesign forsøger Plan.et at forbedre produkter og tjenester med fokus på at minimere miljøpåvirkning og maksimere en mere positive indvirkning på samfundet."
        src={globe}
        alt="Ikon af globe"
        ></Righttext>

      </div>
      <Firesektioner></Firesektioner>
      <p className="tilbud" style={{marginTop:"5vh"}}>Plan.et blev grundlagt som respons på det overraskende indblik i bæredygtigt webdesign og manglen af brug herpå, som blev opdaget gennem undervisningen i multimediedesign. Oprettelsen af webbureauet Plan.et er derfor en reaktion på et tydeligt behov for at balance-re kommunikation og inspiration omkring mere bæredygtige webprincipper.</p>
        <p className="tilbud">Uden Plan.et ville der mangle nogen til at tale højt om internettets og it-branchens miljø-skadelige praktikker. Der ville ligeledes mangle en ressource til at inspirere og uddanne i vigtigheden af bæredygtighed i digitale løsninger.</p>
        <p className="tilbud">Man bør vælge at købe digitale løsninger fra Plan.et, hvis man ønsker, at ens website skal være mere bæredygtig. Hvis man er interesseret i at lære mere om bæredygtigt webdesign eller gerne vil hjælpe med at sprede budskabet derom, så er webbureauet Plan.et til for at hjælpe.</p>

      <Foot></Foot>
    </>
    
  )
}

export default Omosside
