import { useState } from "react"


function TodoForm() {

  const [newItem, setNewItem]  = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // setTodos([...todos, {id:crypto.randomUUID(), title:newItem, completed:false }])
    setNewItem("")
    }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
  )
}

export default TodoForm;