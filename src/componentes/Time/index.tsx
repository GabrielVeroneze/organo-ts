import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    nome: string
    corPrimaria: string
    corSecundaria: string
    colaboradores: IColaborador[]
}

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores } : TimeProps) => {    
    return (
        <>
            {colaboradores.length > 0 && (
                <section
                    className='time'
                    style={{ backgroundColor: corSecundaria }}
                >
                    <h3 className='time__titulo'>{nome}</h3>
                    <div 
                        className='time__sublinhado' 
                        style={{backgroundColor: corPrimaria}}
                    ></div>
                    <div className='time__colaboradores'>
                        {colaboradores.map(colaborador => (
                            <Colaborador
                                key={colaborador.nome}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                data={colaborador.data}
                                corDeFundo={corPrimaria}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default Time