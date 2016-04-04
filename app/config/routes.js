import auth from '../utils/auth.js'
import Main from '../components/Main'
import Logout from '../components/Logout'
import Home from '../components/Home'
import Login from '../components/Login'
import Memberships from '../components/settings/Memberships'
import Watermarks from '../components/settings/Watermarks'
import Distribution from '../components/settings/Distribution'
import Touts from '../components/video/Touts'
import ToutsList from '../components/video/ToutsList'

function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToHome(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/')
  }
}

export default {
  component: Main,
  childRoutes: [
    { path: '/logout',
      getComponents: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, Logout)
        })
      }
    },
    // a route for both authenticathed or unauthenticathed users
    // { path: '/home',
    //   getComponent: (location, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, Home)
    //     })
    //   }
    // },

    { onEnter: redirectToHome,
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/login',
          getComponents: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, Login)
            })
          }
        }
        // ...
      ]
    },

    { onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share UI

        { path: '/',
          getComponents: (location, cb) => {
            return require.ensure([], (require) => {
              cb(null, Memberships)
            })
          }
        },

        // Settings Routes //
        { path: '/memberships',
          getComponents: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, Memberships)
            })
          }
        },
        { path: '/watermarks',
          getComponents: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, Watermarks)
            })
          }
        },
        { path: '/distribution',
          getComponents: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, Distribution)
            })
          }
        },

        // Video Routes //
        { path: '/touts',
          getComponents: (location, cb) => {
            return require.ensure([], (require) => {
              cb(null, Touts)
            })
          },
          indexRoute: {
            getComponents: (location, cb) => {
              // Only load if we're logged in
              if (auth.loggedIn()) {
                return require.ensure([], (require) => {
                  cb(null, ToutsList)
                })
              }
              return cb()
            }
          },
          childRoutes: [
            { onEnter: redirectToLogin,
              childRoutes: [
                // Protected nested routes for the dashboard
                { path: '/published',
                  getComponents: (location, cb) => {
                    require.ensure([], (require) => {
                      cb(null, ToutsList)
                    })
                  }
                }
              ]
            }
          ]
        }

      ]
    }

  ]
}
