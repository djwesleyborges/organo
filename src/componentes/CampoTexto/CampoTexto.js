import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input type="text" id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto