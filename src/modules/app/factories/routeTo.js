import { sequence } from 'cerebral'
import { set, equals, when } from 'cerebral/operators'
import { state } from 'cerebral/tags'

function routeTo (view) {
  return sequence('Route to', [
    set(state`app.currentView`, view),
    // when(state`app.initialFlash`), {
    //   true: [
    //     showFlash(state`app.flash`, state`app.flashType`),
    //     set(state`app.initialFlash`, false),
    //   ],
    //   false: [],
    // },
    equals(state`app.currentView`), {
      login: [],
      register: [],
      private: [
        set(state`app.lastVisited`, 'private'),
        // set(state`app.currentView`, 'login'),
        when(state`user.isLoggedIn`), {
          true: [],
          false: [
            set(state`app.currentView`, 'main'),
            // showFlash('You must log in to view this page', 'info'),
          ],
        },
      ],
      // admin: [
      //   set(state`app.lastVisited`, 'admin'),
      //   when(state`user.isAdmin`), {
      //     true: fetchUsers,
      //     false: [
      //       set(state`app.currentView`, 'login'),
      //       showFlash(
      //         'You need Admin permissions to view this page',
      //         'info'
      //       ),
      //     ],
      //   },
      // ],
      // newpassword: [
      //   when(state`user.api.@id`), {
      //     true: [],
      //     false: [
      //       set(state`app.currentView`, 'login'),
      //       showFlash('You must log in to change your password', 'info'),
      //     ],
      //   },
      // ],
      otherwise: [
        set(state`app.lastVisited`, view),
      ],
    },
  ])
}

export default routeTo
