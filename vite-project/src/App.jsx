import './App.css'
import Nav from './Components/nav'
import {Routes, Route, Navigate} from "react-router-dom"
import Forside from './Pages/forside'
import Adminside from './Pages/adminside'
import Brugerside from './Pages/brugerside'
import Loginside from './Pages/loginside'
import Omosside from './Pages/omosside'
import Foot from './Components/foot'
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function App() {


  return (
    <>
<Nav>
</Nav>

<main>
  <Routes>
    <Route path="/" element={<Forside />}></Route>
    <Route path="/adminside" element={< Adminside/>}></Route>
    <Route path="/brugerside" element={<Brugerside />}></Route>
    <Route path="/loginside" element={<Loginside />}></Route>
    <Route path="/omosside" element={<Omosside />}></Route>
    <Route path="*" element={<Navigate to="/" />}></Route>
  </Routes>
</main>
<Foot></Foot>

    </>


  );
}

export default App
