import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import { AppNavigator } from './configs/routes'

// const AppRouter = ({ dispatch, routing }) => (
//   <AppNavigator navigation={addNavigationHelpers({dispatch, state: routing })} />
// )
const AppRouter = ({ dispatch, routing }) => (
  <AppNavigator />
)

// AppRouter.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   routing: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   routing: state.routing,
// });

// export default connect(mapStateToProps)(AppRouter)
export default AppRouter
