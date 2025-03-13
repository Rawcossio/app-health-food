
import EnDescuento from "../Components/EnDescuento"
import EncuentraComida from "../Components/EncuentraComida"
import Header from "../Components/Header"

const HealthFood=()=>{
    let repetidos=[1,2,3,4]
    return(
        <html>
        <body>
        <Header/>
            <section>
                <EncuentraComida/>
            </section>
        <div className="tarjetas">
            {repetidos.map((repetido)=>{
                return<EnDescuento/>
            })
            }
        </div>
        </body> 
        </html>
        
        )
            
}
export default HealthFood