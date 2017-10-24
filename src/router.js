import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createNavigator, addNavigationHelpers } from 'react-navigation'

import { AppNavigator } from './config/routes';

const NavView = ({ dispatch, routing, navigation, router }) => {
  console.group('NavView')
  console.log('dispatch', dispatch)
  console.log('routing', routing)
  console.log('navigation', navigation)
  console.log('router', router)
  console.groupEnd()

  const state = routing;
  const Component = router.getComponentForState(state);
  return (
    <Component
      navigation={addNavigationHelpers({dispatch, state: routing })}
    />
  );
};

const AppRouter = createNavigator(AppNavigator)(NavView)

const mapStateToProps = state => ({
  routing: state.routing,
});

export default connect(mapStateToProps)(AppRouter)
