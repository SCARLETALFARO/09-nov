import { useState } from 'react'
import './App.css';
import Todo from './componentes/Todo'

function App() {
  const defaultstate = [
    { label: "comprar mantequilla" },
    { label: "comprar pan" },
    { label: "comprar jamon" },
    { label: "comprar leche" },
    { label: "comprar azucar" }
  ]
  const [items, setItems] = useState(defaultstate)
  const [newItem, setNewItem] = useState('')

  const deletefn=(label) =>{
    setItems(items.filter(item=> item.label !== label))
  }
const deletAll=()=>{
  setItems([])
}

  const list = items.map(item => {
    return (
    <Todo
    onClickfn={()=> deletefn(item.label)}
    >
      {item.label}
    </Todo>
    )
  })
    const onclickfn = () => {
      setItems([...items, { label: newItem }])

  }

  const onchangefn = (Event) => {
    setNewItem(Event.target.value)
  }

  return (
    <div className="app">
      <h1>mi lista de cosas por hacer</h1>
      <p>cantidad de items:{items.length}</p>
      <input
        type="text"
        value={newItem}
        onChange={onchangefn}
      />

      <button onClick={onclickfn}>agregar</button>
     <button onClick={deletAll}>eliminar todo</button>
      {list}

    </div>
  )
}

export default App;
