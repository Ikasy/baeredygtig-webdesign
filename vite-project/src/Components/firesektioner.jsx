import person from "../assets/person.svg"
function Firesektioner (props) {
    // javascript her
    
      return (
        <section className="firesektioner">
            <h1 style={{ marginBottom: "5vh" }}>Hvem er vi?</h1>
            <div>
                <section>
                    <img className="person" src={person} alt="Ikon af person" /> 
                    <h3>
                     Leila 
                    </h3>
                    <p style={{borderTop:"#de9232 solid 2px",width:"50%",margin:"auto"}}>
                        Director
                    </p>
                </section>

                <section>
                    <img className="person" src={person} alt="Ikon af person" /> 
                    <h3>
                     Charlotte  
                    </h3>
                    <p style={{borderTop:"#de9232 solid 2px",width:"50%",margin:"auto"}}>
                        Executive
                    </p>
                </section>

                <section>
                    <img className="person" src={person} alt="Ikon af person" /> 
                    <h3>
                     Julie
                    </h3>
                    <p style={{borderTop:"#de9232 solid 2px",width:"50%",margin:"auto"}}>
                        Manager
                    </p>
                </section>

                <section>
                    <img className="person" src={person} alt="Ikon af person" /> 
                    <h3>
                     Anne-Mette
                    </h3>
                    <p style={{borderTop:"#de9232 solid 2px",width:"50%",margin:"auto"}}>
                        Coordinater
                    </p>
                </section>





            </div>
        </section>
      )
    }
    
    export default Firesektioner