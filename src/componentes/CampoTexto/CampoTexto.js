import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input required={props.obrigatorio} type="text" id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto