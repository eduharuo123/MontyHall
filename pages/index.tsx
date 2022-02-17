
import styles from "../styles/Formulario.module.css"
import Cartao from "../componentes/Cartao"
import Link from "next/link"
import { useState } from "react"
import EntradaNumerica from "../componentes/EntradaNumerica"

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [portComPresente, setPortComPresente] = useState(1)

   
  return (
   
   
      <div className={styles.formulario}> 
       
        <div>
          <Cartao bgcolor="#c0392c">
            <h1>Monty Hall</h1>
          </Cartao>
          <Cartao>
            <EntradaNumerica text="Quantidade de portas"
             value={qtdePortas}
             onChange={novaQtde => setQtdePortas(novaQtde)}
             />
          </Cartao>
        </div>
        <div>
          <Cartao>
            <EntradaNumerica text="Porta com presente"
              value={portComPresente}
              onChange={novaPortComPresente => setPortComPresente(novaPortComPresente)}
            />
          </Cartao>
          <Cartao bgcolor="#28a085">
            <Link href={`jogo/${qtdePortas}/${portComPresente}`}>
              <h2 className={styles.Iniciar}>Iniciar</h2>
            </Link>
          </Cartao>
        </div>
        
      </div>
    
    
  )
}
