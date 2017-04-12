export default ({ props, state }) => {
  state.set(`app.drawerActive`, props.value)
  state.set(`app.drawerPinned`, props.value)
}
