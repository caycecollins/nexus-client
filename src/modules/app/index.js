import viewChanged from './signals/viewChanged'

export default {
  state: {
    currentView: null,
    lastVisited: null,
  },
  signals: {
    viewChanged,
  },
}
