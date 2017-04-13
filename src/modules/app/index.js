import viewChanged from './signals/viewChanged'
import drawerActiveToggled from './signals/drawerActiveToggled'
import drawerPinnedToggled from './signals/drawerPinnedToggled'
import sidebarActiveToggled from './signals/sidebarActiveToggled'

function getInitialDrawerPinned () {
  if (window.outerWidth < 600) {
    return false
  } else {
    return true
  }
}

export default {
  state: {
    currentView: null,
    lastVisited: null,
    drawerActive: false,
    drawerPinned: getInitialDrawerPinned() || false,
    sidebarActive: null,
  },
  signals: {
    viewChanged,
    drawerActiveToggled,
    drawerPinnedToggled,
    sidebarActiveToggled,
  },
}
