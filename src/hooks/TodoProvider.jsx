import { useState } from 'react';

function useProvider(){
    const[tarefa, setTarefa] = useState({
        nome: ''
    });

    const [listaTarefas, setListaTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem('listaTarefas');
        return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    });

    return {
        tarefa,
        setTarefa,
        listaTarefas,
        setListaTarefas
    };
}

export default useProvider;