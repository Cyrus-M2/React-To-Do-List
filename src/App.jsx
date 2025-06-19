import { useState } from 'react'
import './App.css'


function ToDo({activity, description}) {
  return(
    <div className='todo-items'>
      <h4>{activity}</h4>
      <p>{description}</p>
    </div>
  )
}
function App() {
  const [activity, setActivity] = useState("")
  const [description, setDescription] = useState("")
  const [TodoListItems, setTodoListItems] = useState([])

  function handleChangeActivity(e) {
    setActivity(e.target.value)
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }
  function handleAddActivity(e) {
    e.preventDefault()
    if (!activity || !description) {
      alert("Fill out all the fields")
      return;
    }
    const newActivity = {
      activity: activity,
      description: description
    }
    setTodoListItems(function(prevTodoListItems) {
      return [...prevTodoListItems, newActivity]
    })
    setActivity("")
    setDescription("")
  }

  return (
    <div className="form-container">
        <h1>React To-Do-List</h1>
      <div className="form-row">

          <input type="text" placeholder="activity" className='form-input' value={activity}
          onChange={handleChangeActivity}/>

          <input type="text" placeholder="description" className='form-input' value={description}
          onChange={handleChangeDescription}/>

        <button className='btn' onClick={handleAddActivity}>Add Activity</button>
      </div>
    <div>
          {
            TodoListItems.map((item, index) => <ToDo
            key={index}
            activity={item.activity}
            description={item.description}
      />)
    }
        </div>
    </div>
  
  )
}

export default App
