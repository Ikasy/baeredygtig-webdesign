
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
export default function Meeting({moeder, handleButton}){
    return(
        <div style={{border:"solid 2px #fecf9a", width:"14vw"}}>
            <div>Navn: {moeder.navn}</div>
            <div>Email: {moeder.email}</div>
            <div>Mobilnummer: {moeder.mobilnummer}</div>
            <div>Dato: {moeder.dato}</div>
            <div>Tidspunkt: {moeder.tidspunkt}</div>
            <div>Indhold: {moeder.indhold}</div>
            <span>{moeder.status}</span>
            {moeder.status === "Nyt møde" ?

            /* if statement */
            <div> 
                <button className="adminknap" type="button">Rediger</button>
                <button className="adminknap" type="button" data-knap="skiftstatus" value={moeder.id} onClick=
                {handleButton}>Accepter</button>
            </div>
            : /* else */
            <div>
                <button className="adminknap" type="button">Rediger</button>
                <button className="adminknap" type="button" data-knap="slet" value={moeder.id} onClick=
                {handleButton}>Færdig</button>
            </div>
            }           
        </div>
    )
}