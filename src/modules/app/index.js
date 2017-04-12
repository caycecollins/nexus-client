import viewChanged from './signals/viewChanged'
import drawerActiveToggled from './signals/drawerActiveToggled'
import drawerPinnedToggled from './signals/drawerPinnedToggled'
import sidebarActiveToggled from './signals/sidebarActiveToggled'

export default {
  state: {
    currentView: null,
    lastVisited: null,
    drawerActive: true,
    drawerPinned: true,
    sidebarActive: null,
  },
  signals: {
    viewChanged,
    drawerActiveToggled,
    drawerPinnedToggled,
    sidebarActiveToggled,
  },
}
