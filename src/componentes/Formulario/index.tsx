import { useState } from 'react'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

interface FormularioProps {
    times: string[]
    aoColaboradorCadastrado: (colaboradores: IColaborador) => void
}

const Formulario = ({ times, aoColaboradorCadastrado } : FormularioProps) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [data, setData] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            data,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setData('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form className='formulario__caixa' onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    tipo='date'
                    label='Data de entrada'
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Time' 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario