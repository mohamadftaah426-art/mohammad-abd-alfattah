const PersonForm = ({ onSubmit, name, number, onNameChange, onNumberChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        Number: <input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default PersonForm