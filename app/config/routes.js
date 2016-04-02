// import React from 'react';
// import Main from '../components/Main';
// import Home from '../components/Home';
// import Memberships from '../components/settings/Memberships';
// import Watermarks from '../components/settings/Watermarks';
// import Distribution from '../components/settings/Distribution';
// import Touts from '../components/video/Touts';
// import ToutsList from '../components/video/ToutsList';
// import Articles from '../components/articles/Articles';
// import { Route, IndexRoute } from 'react-router';

// export default (
//   <Route path="/" component={Main}>
//     <IndexRoute component={Home} />
//     <Route path="/memberships" component={Memberships} />
//     <Route path="/watermarks" component={Watermarks} />
//     <Route path="/distribution" component={Distribution} />
//     <Route path="/touts" component={Touts} >
//       <Route path="/touts/pending" component={ToutsList} />
//       <Route path="/touts/scheduled" component={ToutsList} />
//       <Route path="/touts/published" component={ToutsList} />
//       <Route path="/touts/rejected" component={ToutsList} />
//     </Route>
//     <Route path="/articles" component={Articles} />
//     <Route path="/articles/unmatched" component={Articles} />
//   </Route>
// );
import auth from '../utils/auth.js'

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
  component: require('../components/Main'),
  childRoutes: [
    { path: '/logout',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../components/Logout'))
        })
      }
    },
    // a route for both authenticathed or unauthenticathed users
    // { path: '/home',
    //   getComponent: (location, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('../components/Home'))
    //     })
    //   }
    // },

    { onEnter: redirectToHome,
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/login',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../components/Login'))
            })
          }
        }
        // ...
      ]
    },

    { onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share UI
        { path: '/memberships',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../components/settings/Memberships'))
            })
          }
        },
        { path: '/watermarks',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../components/settings/Watermarks'))
            })
          }
        },
        { path: '/distribution',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../components/settings/Distribution'))
            })
          }
        }
        // ...
      ]
    },

    { path: '/touts',
      getComponent: (location, cb) => {
        // Share the path
        // Dynamically load the correct component
        if (auth.loggedIn()) {
          return require.ensure([], (require) => {
            cb(null, require('../components/video/Touts'))
          })
        }
        return cb()
        // render another component
        // return require.ensure([], (require) => {
        //   cb(null, require('../components/Landing'))
        // })
      },
      indexRoute: {
        getComponent: (location, cb) => {
          // Only load if we're logged in
          if (auth.loggedIn()) {
            return require.ensure([], (require) => {
              cb(null, require('../components/video/ToutsList'))
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
              getComponent: (location, cb) => {
                require.ensure([], (require) => {
                  cb(null, require('../components/video/ToutsList'))
                })
              }
            }
            // ...
          ]
        }
      ]
    }

  ]
}
