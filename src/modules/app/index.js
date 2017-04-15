import viewChanged from './signals/viewChanged'
import drawerActiveToggled from './signals/drawerActiveToggled'
import drawerPinnedToggled from './signals/drawerPinnedToggled'
import drawerMinimalToggled from './signals/drawerMinimalToggled'
import sidebarActiveToggled from './signals/sidebarActiveToggled'
import sidebarViewChanged from './signals/sidebarViewChanged'

function getInitialDrawerPinned () {
  if (window.innerWidth < 840) {
    return false
  } else {
    return true
  }
}

export default {
  state: {
    currentView: null,
    lastVisited: null,
    drawerActive: null,
    drawerPinned: getInitialDrawerPinned(),
    sidebarActive: null,
    sidebarView: null,
    drawerMinimal: null,
  },
  signals: {
    viewChanged,
    drawerActiveToggled,
    drawerPinnedToggled,
    drawerMinimalToggled,
    sidebarActiveToggled,
    sidebarViewChanged,
  },
}
