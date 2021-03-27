import { useDispatch } from 'react-redux'
import { getPokemons } from '../store/actions/characterAction'

function useGetCharacters () {
  const dispatch = useDispatch()

  const getPlus = ({ offset }) => {
    dispatch(getPokemons({ limit: 15, offset: offset }))
  }

  return getPlus
}

export default useGetCharacters
