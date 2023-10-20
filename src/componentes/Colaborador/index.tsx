import './Colaborador.css'

interface ColaboradorProps {
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
}

const Colaborador = ({ nome, cargo, imagem, corDeFundo } : ColaboradorProps) => {
    return (
        <div className='colaborador'>
            <div
                className='colaborador__cabecalho'
                style={{ backgroundColor: corDeFundo }}
            >
                <img className='colaborador__imagem' src={imagem} alt={nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{nome}</h4>
                <h5 className='colaborador__cargo'>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador