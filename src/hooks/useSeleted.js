import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectedPokemon } from '../store/actions/characterAction'

function useSelected () {
  const [selected, setSelected] = useState(1)
  const dispatch = useDispatch()

  const handleSelect = ({ id }) => {
    if (id !== selected) {
      setSelected(id)
    }
  }

  useEffect(() => {
    dispatch(selectedPokemon({ id: selected }))
  }, [selected])

  return {
    selected, handleSelect
  }
}

export default useSelected
