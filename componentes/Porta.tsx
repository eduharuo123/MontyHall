import styles from "../styles/Portas.module.css"
import PortaModel from "../model/PortaModel"
import Presente2 from "./Presente2"

interface PortaProps{
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const porta  = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
    const alterarSelecao = e => props.onChange(porta.alterarSelecao())
 
    const abrirPorta = 
        e =>  {
        e.stopPropagation()
        props.onChange(porta.abrir())
    } 

    function renderizarPorta() {
        return (
          
                <div className={styles.porta}>
                    <div className={styles.numero}>
                        {porta.numero}
                    </div>
                    <div className={styles.macaneta} onClick ={abrirPorta}></div>
                </div>
        
        )
    }



    return(
        <div className={styles.area}  onClick={alterarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? 
                renderizarPorta() : porta.temPresente ? <Presente2></Presente2> : false}
            </div>
            
            <div className={styles.chao}></div>
        </div>


    )
    
}