import Meeting from "../Components/meeting"
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase-config';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Brugerside() {

  const userInSession = sessionStorage.getItem('user');

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [isPosts, setItPosts]= useState(true);
  const [status, setStatus] =useState("");
  const [aktiveMoeder, setAktiveMoeder]=useState([]);
  const [nyeMoeder, setNyeMoeder]=useState([]);

  useEffect(() => {
          if (loading) return;
          if (!user) return navigate("/login");
  }, [user, loading, navigate]);

  async function handleLogout() {
      try {
          await signOut(auth);
          sessionStorage.removeItem('user');
          navigate("/login");
      } catch (error) {
          console.error(error);
      }
  }

  useEffect(() => {
      async function getPosts(){
          const url ='https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/moeder.json';

          // vent indtil response modtager positivt svar fra firebase
          const response = await fetch(url);
          // læs json data (listen af møder) over i variablen "data"
          const data = await response.json();

          /* tjek om der faktisk er møder på listen (positiv hvis
              forskellig fra null) */
          if (data !==null){
              const postArray = Object.keys(data).map((key)=>
              ({
                  id: key,
                  ...data[key],
              }));
              setPosts(postArray)
              //console.log(postArray);
          } else {
              setItPosts(false);
          }
      }

  getPosts();

  // Filtrering af møder efter "nyt møde" eller "aktive møde"
  setAktiveMoeder(posts.filter(moeder => moeder.status === "Aktivt møde"));
  setNyeMoeder(posts.filter(moeder => moeder.status === "Nyt møde"));

  }, [status, posts]);


function handleButton(event) {
  const id = event.target.value;
  const handling = event.target.dataset.knap;
  const url =`https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/moeder/${id}.json`;



  if (handling === "skiftstatus") {
      fetch(url, {
          method: 'PATCH', //brug PATCH til at opdatere eksisterende data 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({status: 'Aktivt møde'}), // ny status værdi
      })
          .then((response)=>{
          if (!response.ok) {
              throw new Error('Fejl ved ændring af status');
          }
              setStatus('status blev ændret for bestilling til "Aktivt møde" ')
      })
      .catch((error) =>{
          setStatus ('Fejl ved ændring af satus', error)
      });
  } else { //gør det her når handling = "slet"
      fetch(url, {
          method: 'DELETE'
      })

          .then((response) =>{
              if(!response.ok) {
                  throw new Error('Fejl ved sletning af møde');
              }
              setStatus('Mødet blev slettet')
          })
          .catch((error)=>{
              setStatus('Fejl ved sletning af møde', error)
          });
      }
}


  return (
    <div className="mødeside">
      <section className="page">
        <h1>Kommende møder</h1>
        <p>{status}</p>
        {nyeMoeder.length > 0 && isPosts ? (
          <div>
            {nyeMoeder.map((moederobjekt) => (
              <Meeting key={moederobjekt.id} moeder={moederobjekt}
                handleButton={handleButton} />
            ))}
          </div>
        ) : (
          <p>Ingen nye møder</p>
        )}
  
        {aktiveMoeder.length > 0 && isPosts ? (
          <div>
            {aktiveMoeder.map((moederobjekt) => (
              <Meeting key={moederobjekt.id} moeder={moederobjekt}
                handleButton={handleButton} />
            ))}
          </div>
        ) : (
          <p>Ingen aktive møder</p>
        )}
      </section>
      
    </div>
    
  )
}

export default Brugerside
