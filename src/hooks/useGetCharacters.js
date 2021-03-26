import { useDispatch } from 'react-redux'
import { getPokemons } from '../store/actions/characterAction'

function useGetCharacters () {
  const dispatch = useDispatch()

  const getPlus = ({ offset }) => {
    dispatch(getPokemons({ limit: 12, offset: offset }))
  }

  return getPlus
}

export default useGetCharacters
