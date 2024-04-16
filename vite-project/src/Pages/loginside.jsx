import logindbillede from "../assets/profil4.svg";
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Loginside() {


  return (
<div className="logside">
<img src={logindbillede} alt="bruger ikon med plante"></img>

<div className="formular">
  <form>
  <input 
      type="email"
      name="email"
      placeholder="Din mail"
      required
      />
    <input
      type="password"
      name="password"
      placeholder="Dit password"
      required
      />
      <button type="submit">Log ind</button>
      </form>
</div>
</div>


    
  )
}

export default Loginside
