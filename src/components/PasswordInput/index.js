import './PasswordInput.css';

const PasswordInput = (props) => {
    return (
        <div className="campo-password">
            <label for={ props.id } >{ props.label }</label>
            <input type="password" placeholder="********" pattern="(?=.*\d)(?=.*[\W_]).{7,}" id={ props.id } />
        </div>
    );
}

export default PasswordInput;