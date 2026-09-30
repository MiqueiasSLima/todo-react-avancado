function useFilters({ tarefa, setTarefa, setListaTarefas }){
    const handleChange = (event) => {
    const { name, value } = event.target;
        setTarefa((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        const novaTarefa = {
            ...tarefa,
            id: Date.now(),
            concluida: false
        };

        setListaTarefas((prevLista) => [...prevLista, novaTarefa]);
        setTarefa({ nome: '' });
    };

    const removerTarefa = (idParaRemover) => {
        setListaTarefas((prevLista) => 
            prevLista.filter((tarefa) => tarefa.id !== idParaRemover)
        );
    };
    
    return{
        handleChange,
        handleSubmit,
        removerTarefa
    }
}


export default useFilters
