import skraldespand from "../assets/skraldespand.svg"
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
export default function Kundemoede({moeder, handleButton}){
    return(
        <div className="kundemoede" style={{border:"solid 2px #fecf9a", width:"13.785vw"}}>
        <div>Navn: {moeder.navn}</div>
        <div>Email: {moeder.email}</div>
        <div>Dato: {moeder.dato}</div>
        <div>Tidspunkt: {moeder.tidspunkt}</div>
        <div>Indhold: {moeder.indhold}</div>
       
        <div>
            <button className="sletknap" type="button" data-knap="slet" value={moeder.id} onClick=
            {handleButton}><img src={skraldespand} alt="sletmoedet"></img></button> 
        </div>
               
    </div>
    )
}