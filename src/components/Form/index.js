import './Form.css';
<<<<<<< HEAD
import TextInput from '../TextInput';

const Form = () => {
    return (
        <section className="section-cadastro">
            <form className="form-cadastro">
                <h2>Preencha os dados para criar o card do CS</h2>
                <TextInput label="Nome" placeholder="Digite seu nome" />
                <TextInput label="Cargo" placeholder="Digite seu cargo" />
                <TextInput label="Imagem" placeholder="Informe uma imagem" />
=======
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
>>>>>>> f9ee9f1b786020e80b26c803e69200ea13d320c8
                <button type="submit">Cadastrar</button>
            </form>
        </section>
    );
}

export default Form;