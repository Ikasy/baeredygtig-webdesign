// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Textboks(props) {
// javascript her

  return (
<section className="textboks">
    <h2>{props.overskrift}</h2>
    <p>{props.tekst}</p>
    <p>{props.tekst2}</p>
    
</section>

    // alt html her (inden for forældre <>)
  )
}

export default Textboks
