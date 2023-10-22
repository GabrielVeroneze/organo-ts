import './ListaSuspensa.css'

interface ListaSuspensaProps {
    obrigatorio: boolean
    label: string
    itens: string[]
    valor: string
    aoAlterado: (valor: string) => void
}

const ListaSuspensa = ({ obrigatorio, label, itens, valor, aoAlterado } : ListaSuspensaProps) => {
    
    const aoSelecionado = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="lista">
            <label className="lista__label">{label}</label>
            <select
                value={valor}
                onChange={aoSelecionado}
                className="lista__menu"
                required={obrigatorio}
            >
                <option value=""></option>
                {itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa
