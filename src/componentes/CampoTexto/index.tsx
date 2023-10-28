import './CampoTexto.css'

interface CampoTextoProps {
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
    obrigatorio?: boolean
    label: string
    placeholder: string
    valor: string
    aoAlterado: (valor: string) => void
}

const CampoTexto = ({ tipo = 'text', obrigatorio = false, label, placeholder, valor, aoAlterado } : CampoTextoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>{label}</label>
            <input 
                type={tipo}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                className='campo-texto__input'
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto