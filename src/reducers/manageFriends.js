export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      const newFriends = [...state.friends]
      const index = newFriends.findIndex((element) => element.id === action.id)
      if (index >= 0) {
        newFriends.splice(index, 1)
      }
      return { friends: newFriends }
    default:
      return Object.assign({}, state)
  }
}
