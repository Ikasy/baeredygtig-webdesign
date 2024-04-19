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
