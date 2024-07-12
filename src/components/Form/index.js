import './Form.css';
import TextInput from '../TextInput';

const Form = () => {
    return (
        <section className="section-cadastro">
            <form className="form-cadastro">
                <h2>Preencha os dados para criar o card do CS</h2>
                <TextInput label="Nome" placeholder="Digite seu nome" />
                <TextInput label="Cargo" placeholder="Digite seu cargo" />
                <TextInput label="Imagem" placeholder="Informe uma imagem" />
                <button type="submit">Cadastrar</button>
            </form>
        </section>
    );
}

export default Form;