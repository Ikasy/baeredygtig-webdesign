import { Link } from "react-router-dom";
import telefon from "../assets/telefon.svg"
import mail from "../assets/kontakt.svg"
import hus from "../assets/hus.svg"

import { useEffect, useState } from "react";
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Foot() {
    // javascript her

    const [navn, setNavn] = useState("");
    const [email, setEmail] = useState("");
    const [mobilnummer, setMobilnummer] = useState("");
    const [status, setStatus] = useState("");
    const [dato, setDato] = useState("");
    const [tidspunkt, setTidspunkt] = useState("");
    const [indhold, setIndhold] = useState("");

    /* useState skifter en status, når du bruger en funktion kalder den på useState så den ændrer status 
    
    usestate er en funktion fra react, og bruges til at tilføje lokal tilstand til funktionelle komponenter i react. her defineres tilstande ved hjælp af usestate-funktionen som fx navn, email, mobilnummer osv. Disse tilstande bruges til at holde styr på forskellige former for data i din komponent. 

    når man så kalder på 'useState(initialState)' returnerer det et par: den aktuelle tilstand og en funktion, der kan bruges til at opdatere den. 'initialState' er værdien som tilstanden starter med.

    I koden burger vi disse tilstande til at opbevare værdier, som brugeren indtaster i formularfelterne, og når brugeren trykker på knappen "Book møde", bruges disse værdier til at oprette en formulardata og sende den til en API-endepunkt (firebase)    */

    function handleSubmit(e) {
        e.preventDefault();

        const url = 'https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/moeder.json';

        const formData = {
            navn: navn,
            email: email,
            mobilnummer: mobilnummer,
            dato: dato,
            tidspunkt: tidspunkt,
            indhold: indhold,
            status: "Nyt møde"
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Fejl ved gemning af formulardata');
                }
                setStatus('Møde booket.')
                // console.log('Formulardata gemt i Firebase Realtime Database.');
            })
            .catch((error) => {
                setStatus('Fejl ved booking', error)
                // console.error8'Fejl ved gemning af fomulardata', error);       
            });
    }

    /* Samlet set håndterer denne funktion processen med at indsamle data fra formularen, sende dem til en server (i dette tilfælde Firebase Realtime Database), og derefter give feedback til brugeren baseret på, om processen var vellykket eller ej.
    
    JavaSCript-funktionen 'handleSubmit' bliver kaldt når brugern trykker på knappen "book møde" i formluaren. 

    'e.preventDefault();' dette kald forhindrer standardadfærden for formularen, hvilket normalt ville være at sende dataene til en ny side og fenindlæse siden. I stedet stoppes dette, hvilket forhindre siden i at blive genidlæst og vi kan håndtere formulardataene i JS.

    const formData = { ... }: Dette opretter et objekt formData, som indeholder alle de data, der er blevet indtastet i formularen. Det inkluderer navn, email, mobilnummer, dato, tidspunkt, indhold og status.

    fetch(url, { ... }): Dette udfører en HTTP POST-anmodning til Firebase Realtime Database med formulardataene. Det bruger fetch-funktionen til at sende en POST-anmodning til den specificerede URL. Dataene sendes som JSON ved at konvertere formData-objektet til en JSON-streng ved hjælp af JSON.stringify(formData).

    .then((response) => { ... }): Dette er en såkaldt "promise chain", der håndterer svaret fra serveren efter at have sendt anmodningen. Hvis svaret er OK (statuskode 200), opdateres statusmeddelelsen til at sige "Møde booket.". Hvis svaret ikke er OK, kastes en fejl, og statusmeddelelsen opdateres til at angive, at der opstod en fejl ved gemning af formulardataene.

    .catch((error) => { ... }): Dette fanger eventuelle fejl, der opstår under anmodningen. Hvis der opstår en fejl, opdateres statusmeddelelsen til at angive, at der opstod en fejl ved booking, og fejlinformationen udskrives til konsollen.  */

    return (
        <footer id="footer">

            <div>
                <div className="kontakt">
                    <h3>Er du interesseret i at høre mere?</h3>
                    <a href="tel: +45 12345678"><img src={telefon} alt="telefon ikon" /> +45 12 34 56 78 </a>
                    <a href="mailto: Kontakt@Plan.et.dk"><img src={mail} alt="mail ikon" /> Kontakt@Plan.et.dk </a>
                    <a href="#"><img src={hus} alt="hus ikon" /> Planetvej 1, Earth 0000</a>
                </div>
                <div className="formular">
                    <form onSubmit={handleSubmit}>
                        <input value={navn}
                            onChange={(e) => setNavn(e.target.value)}
                            type="text"
                            name="navn"
                            placeholder="Dit Navn"
                            required
                        />
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Din Email"
                            required
                        />
                        <input value={mobilnummer}
                            onChange={(e) => setMobilnummer(e.target.value)}
                            type="tel"
                            name="mobilnummer"
                            placeholder="Dit Mobilnummer"
                            required
                        />
                        <input value={dato}
                            onChange={(e) => setDato(e.target.value)}
                            type="date"
                            name="Dato"
                            placeholder="dato for møde"
                            required
                        />
                        <input value={tidspunkt}
                            onChange={(e) => setTidspunkt(e.target.value)}
                            type="time"
                            name="Tidspunkt"
                            placeholder="tidspunkt for møde"
                            required
                        />
                        <textarea id="meetinginfo" value={indhold}
                            onChange={(e) => setIndhold(e.target.value)}
                            type="text"
                            name="indhold"
                            placeholder="Hvad skal mødet handle om?"
                            required
                        />
                        {status}
                        <button type="submit">Book møde</button>
                    </form>
                </div>
            </div>
        </footer>
        // alt html her (inden for forældre <>)
    )
}

export default Foot
