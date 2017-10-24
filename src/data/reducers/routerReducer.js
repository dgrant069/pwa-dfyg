import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../config/routes';

const initialNavState = AppNavigator.getStateForAction('Main');

export const routerReducer = (state = initialNavState, action) => {
  
  const nextState = AppNavigator.getStateForAction(action, state);

  return nextState || state;
}
