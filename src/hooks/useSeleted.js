import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedPokemon } from '../store/actions/characterAction'

function useSelected () {
  const { list } = useSelector(state => state.characters)
  const [selected, setSelected] = useState({})
  const dispatch = useDispatch()

  const handleSelect = ({ id }) => {
    if (id !== selected.id) {
      const filter = list.filter((item) => item.id === id)[0]
      setSelected(filter)
    }
  }

  useEffect(() => {
    dispatch(selectedPokemon(selected))
  }, [selected])

  return {
    selected, handleSelect
  }
}

export default useSelected
