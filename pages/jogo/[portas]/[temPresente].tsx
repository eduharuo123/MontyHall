import { useEffect, useReducer, useState } from "react"
import PortaModel from "../../../model/PortaModel"
import Porta from "../../../componentes/Porta"
import { atuallizarPortas, criarPortas, vencedor } from "../../../model/Portas" 
import styles from "../../../styles/jogos.module.css"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Jogo() {
    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])
    const [ganhou, setGanhou] = useState(false)
    
    
    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente

      const qtdePortasValida = portas >=3 && portas <= 100
      const temPresenteValido = temPresente >=1 && temPresente <= portas 
      setValido(qtdePortasValida && temPresenteValido)
    }, [portas])

    useEffect(() =>{
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(portas,temPresente))
    }, [router?.query]
    )

   


  function definirVencedor(porta){
    if(vencedor(porta)){
      setGanhou(true)
    }
  }

    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => {
                setPortas(atuallizarPortas(portas, novaPorta)); definirVencedor(novaPorta)
            }} /> 
        })
    }



    return (
        <div className={styles.jogos}> 
          
            {ganhou== true && (
              <div className={styles.display} >
                <h3>Voce ganhou</h3>
                <div className={styles.botoes}>
            <Link href="/">
                <button>Jogar de novo</button>
              </Link> 
            
          </div>
              </div>
            
            )}
          
          
          <div className={styles.portas}>
            {valido ?
                renderizarPortas() : 
                <h2>Valores invalidos</h2>}
          </div>
          <div className={styles.botoes}>
            <Link href="/">
                <button>Menu</button>
              </Link> 
            
          </div>
       
                
        
        </div>
    )
}