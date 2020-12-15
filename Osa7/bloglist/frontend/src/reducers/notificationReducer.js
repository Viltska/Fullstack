
export const setMessage = (message) => {
  return ({
    type: 'SET_NOTIFICATION',
    data: message
  })
}

export const clearMessage = () => {
  return ({
    type: 'CLEAR_NOTIFICATION'
  })
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer