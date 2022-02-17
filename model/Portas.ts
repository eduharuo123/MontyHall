
import PortaModel from "./PortaModel";

export function criarPortas(qtde: number, portaPremiada: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i +1
        const temPresente = numero === portaPremiada
        return new PortaModel(numero, temPresente)
    })
}


export function atuallizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAmodificada = portaAtual.numero === portaModificada.numero

        if(igualAmodificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}

export function vencedor(porta : PortaModel){
    
    if(porta.aberta && porta.temPresente){
        return true
    } else {
        return false
    }

}