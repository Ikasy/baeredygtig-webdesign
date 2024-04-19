import logindbillede from "../assets/profil4.svg";
import { useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Loginside() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');


  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      sessionStorage.setItem('user', user.email);
      if (user.email == "ejer@ejer.dk") {
        navigate("/adminside");
      } else {
        navigate("/brugerside");
      }
    } catch (error) {
      console.error(error);
      setStatus("Hovsa! Brugernavn og password stemmer ikke overens.")
    }
  }

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
          {status}
          <button type="submit">Log ind</button>
        </form>
      </div>
    </div>
  )
}

export default Loginside
