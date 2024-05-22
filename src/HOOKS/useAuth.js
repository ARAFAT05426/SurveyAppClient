import { useContext } from 'react'
import AuthContext from '../CONTEXTS/AuthContext'
const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
