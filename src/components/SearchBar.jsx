import useSearch from '../hooks/useSearch'

const SearchBar = () => {
  const { setInput } = useSearch()
  let timmer = null

  const handleChange = (e) => {
    if (timmer) {
      clearTimeout(timmer)
    }

    timmer = setTimeout(() => {
      setInput(e.target.value.toLowerCase())
    }, 500)
  }

  return (
    <div>
      <input
        className='search-input'
        type="text"
        placeholder='Search by name or id'
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
