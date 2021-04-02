


const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id:id, ...event }]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}
// state = [] 部分は初期化
// Reducerは送られてきたActionと元のstateをもとに、新しいstateを返す純粋関数
// 純粋関数とは「同じ入力値を渡すたび、決まって同じ出力値が得られる」ということ
export default events