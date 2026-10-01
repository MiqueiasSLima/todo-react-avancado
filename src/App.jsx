import useProvider from "./hooks/TodoProvider.jsx"
import useFilters from './hooks/TodoFilters.jsx'
import Forms from "./components/TodoForm.jsx"
import Mostrar from "./components/TodoMostrar.jsx"
import Cabecalho from "./pages/Cabecalho.jsx"
import Rodape from "./pages/Rodape.jsx"
import { ListaContext } from './contexts/ListaContexts.jsx'

function App() {

  const { tarefa, setTarefa, listaTarefas, setListaTarefas} = useProvider();

  const { handleChange, handleSubmit, removerTarefa } = useFilters({
    tarefa, 
    setTarefa, 
    setListaTarefas
  });

  return (
    <>
      <ListaContext.Provider value={{ tarefa, listaTarefas, setListaTarefas, handleChange, handleSubmit, removerTarefa}}>
        <Cabecalho />
        <main>
          <Forms />
          <Mostrar />
        </main>
        <Rodape />
      </ListaContext.Provider>
    </>
  )
}

export default App
