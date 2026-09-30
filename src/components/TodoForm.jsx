import { useContext } from 'react'
import { ListaContext } from '../contexts/ListaContexts';

function Forms(){

    const { tarefa, handleChange, handleSubmit } = useContext(ListaContext);
    
    return(
        <>
            <form className="formulario" onSubmit={handleSubmit}>
                <input className="inserir"
                type="text"
                name="nome" 
                value={tarefa.nome} 
                onChange={handleChange} 
                placeholder="Nome da tarefa" 
                required
                />
                <button type="submit" className="botao-add">Adicionar</button>
    
            </form>
        </>
    );
}

export default Forms

