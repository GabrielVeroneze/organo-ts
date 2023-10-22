import './CampoTexto.css'

interface CampoTextoProps {
    obrigatorio?: boolean
    label: string
    placeholder: string
    valor: string
    aoAlterado: (valor: string) => void
}

const CampoTexto = ({ obrigatorio = false, label, placeholder, valor, aoAlterado } : CampoTextoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>{label}</label>
            <input 
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                className='campo-texto__input'
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto