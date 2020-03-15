import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

const REGISTER_SUCCESS = "register/REGISTER_SUCCESS"
const REGISTER_FAILURE = "register/REGISTER_FAILURE"

// let interceptor = {}

const initialState = {
  isRegistered: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true }
    case REGISTER_FAILURE:
      return { ...state, isRegistered: false }
    default:
      return state
  }
}

function register(username, password) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/register", { username, password }).then(resp => {
  //       resolve({ type: REGISTER_SUCCESS })
  //     })
  //   })
  // }

  return dispatch => {
    axios
      .post("/api/register", { username, password })
      .then(resp => {
        dispatch({
          type: REGISTER_SUCCESS
        })
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAILURE
        })
      })
  }
}

export function useRegister() {
  const dispatch = useDispatch()
  const isRegistered = useSelector(appState => appState.regState.isRegistered)
  const reg = (username, password) => dispatch(register(username, password))

  return { reg, isRegistered }
}
