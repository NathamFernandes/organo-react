import './Form.css';
import TextInput from "../TextInput";
import PasswordInput from '../PasswordInput';

const Form = (props) => {
    return (
        <section className="my-section">
            <form className="my-form">
                <TextInput label="Nome" placeholder="Digite seu nome" />
                <TextInput label="Cargo" placeholder="Digite seu cargo" />
                <TextInput label="Imagem" placeholder="Informe uma imagem" />
                <PasswordInput id="password" label="Senha" />
                <button type="submit">Cadastrar</button>
            </form>
        </section>
    );
}

export default Form;