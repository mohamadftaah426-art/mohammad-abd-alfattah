// التمرين 2 — دليل الهاتف مع البحث والإضافة وجلب البيانات من json-server

import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ value, onChange }) => (
  <div>
    البحث: <input value={value} onChange={onChange} />
  </div>
)

const PersonForm = ({ onSubmit, name, number, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>الاسم: <input value={name} onChange={onNameChange} /></div>
    <div>الرقم: <input value={number} onChange={onNumberChange} /></div>
    <div><button type="submit">إضافة</button></div>
  </form>
)

const Persons = ({ persons }) => (
  <ul>
    {persons.map(person =>
      <li key={person.id}>
        {person.name}: {person.number}
      </li>
    )}
  </ul>
)

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    // التحقق من التكرار
    const exists = persons.find(p => p.name === newName)
    if (exists) {
      alert(`${newName} موجود مسبقًا في الدليل`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // تصفية الأشخاص حسب البحث
  const personsToShow = filter
    ? persons.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  return (
    <div>
      <h1>دليل الهاتف</h1>
      <Filter
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <h2>إضافة جهة اتصال</h2>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        onNameChange={(e) => setNewName(e.target.value)}
        onNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h2>الأرقام</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default Phonebook
