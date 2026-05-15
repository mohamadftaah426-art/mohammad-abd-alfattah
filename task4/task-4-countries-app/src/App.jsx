import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
      .catch(err => console.error(err))
  }, [])

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  let content
  if (filter === '') {
    content = <p>Type a country name to search</p>
  } else if (filtered.length > 10) {
    content = <p>Too many matches, specify another filter</p>
  } else if (filtered.length > 1) {
    content = (
      <ul>
        {filtered.map(c => (
          <li key={c.cca3}>{c.name.common}</li>
        ))}
      </ul>
    )
  } else if (filtered.length === 1) {
    content = <CountryDetails country={filtered[0]} />
  } else {
    content = <p>No results found</p>
  }

  return (
    <div>
      <h1>Countries Information</h1>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search for a country"
      />
      {content}
    </div>
  )
}

export default App