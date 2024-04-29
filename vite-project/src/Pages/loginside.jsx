import logindbillede from "../assets/profil4.svg";
import { useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Loginside() {
// definere tilstande for email, password og status 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

// bruges til at navigere til forskellige URL'er
  const navigate = useNavigate();

  // funktion, der kaldes ved indsendelse af formularen. 
  async function handleSubmit(e) {
    e.preventDefault(); // Forhindrer standardadfærd for formularen
    try { // Log ind med email og password ved hjælp af Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
       // Hvis login er vellykket, gem brugerens email i sessionStorage
      const user = userCredential.user;
      sessionStorage.setItem('user', user.email);

       // Naviger brugeren til adminside, hvis email'en er 'ejer@ejer.dk', ellers til brugerside
      if (user.email == "ejer@ejer.dk") {
        navigate("/adminside");
      } else {
        navigate("/brugerside");
      }
    } catch (error) {
       // Hvis der opstår en fejl under login, vis en fejlmeddelelse til brugeren
      console.error(error);
      setStatus("*Hovsa! Brugernavn og password stemmer ikke overens.")
    }
  }

  // Render metoden returnerer HTML-strukturen for login siden
  return (
    <div className="logside">
      <img src={logindbillede} alt="bruger ikon med plante"></img>

      <div className="formular">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Din mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Dit password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="ux">{status}</p>
          <button type="submit">Log ind</button>
        </form>
      </div>
    </div>
  )
}

export default Loginside
