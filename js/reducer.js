let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  document.body.textContent = state.count
}

function dispatch(action){
  state = changeState(state, action)
  render()
}

render()

//just for checking if everything is working correctly and state is show on the page after each change.
dispatch({type: 'INCREASE_COUNT'})
dispatch({type: 'INCREASE_COUNT'}) 

